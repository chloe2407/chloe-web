import { makeStyles, Typography, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import ClearIcon from '@material-ui/icons/Clear';
import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import ScrollArrow from './cards/scroll.js';
import Menu from './parts/Menu.js';
import { Link } from 'react-router-dom';

import portfolio from '../../data/portfolio.js';

// Flatten category (array or object) to searchable strings
const getSearchableText = (item) => {
  const parts = [item.title || "", item.description || ""];
  if (item.category) {
    if (Array.isArray(item.category)) {
      parts.push(...item.category);
    } else if (typeof item.category === "object") {
      Object.values(item.category).flat().forEach(v => parts.push(v));
    }
  }
  if (item.gallery) {
    item.gallery.forEach(g => {
      if (g.title) parts.push(g.title);
      if (g.description) parts.push(g.description);
    });
  }
  return parts.join(" ").toLowerCase();
};

const normalizeCategoryKey = (key) => {
  const k = String(key).replace(/\s*\/\s*/g, " / ");
  return k === "Frameworks/Libraries" ? "Frameworks / Libraries" : k;
};

// Merge alternate spellings (e.g. Javascript -> JavaScript)
const normalizeTechName = (tech) => {
  const t = String(tech).trim();
  if (t.toLowerCase() === "javascript") return "JavaScript";
  return t;
};

const getTechnicalCategories = (items) => {
  const techCategories = {};
  items.forEach(item => {
    if (item.category && typeof item.category === "object" && !Array.isArray(item.category)) {
      for (const key of Object.keys(item.category)) {
        const normKey = normalizeCategoryKey(key);
        if (!techCategories[normKey]) techCategories[normKey] = new Set();
        (item.category[key] || []).forEach(sub => {
          if (sub && sub.trim()) techCategories[normKey].add(normalizeTechName(sub));
        });
      }
    }
  });
  const result = {};
  for (const key in techCategories) {
    result[key] = Array.from(techCategories[key]).sort();
  }
  return result;
};

const useStyles = makeStyles(theme => ({
  layout: {
    padding: theme.spacing(6, 2),
    minHeight: "60vh",
    backgroundColor: "#FAFBFC",
  },
  intro: {
    marginBottom: theme.spacing(3),
    color: "#64748B",
    maxWidth: 600,
    margin: "0 auto",
  },
  searchFilterRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(4),
    maxWidth: 900,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  searchWrapper: {
    position: "relative",
    flex: "1 1 300px",
    maxWidth: 420,
  },
  searchBox: {
    position: "relative",
    width: "100%",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: "100%",
  },
  searchIcon: {
    color: "#94A3B8",
    marginRight: theme.spacing(1.5),
  },
  inputInput: {
    padding: theme.spacing(2, 0),
    width: "100%",
    fontSize: "1rem",
    "&::placeholder": {
      color: "#94A3B8",
    },
  },
  suggestions: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 4,
    backgroundColor: "#fff",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    maxHeight: 320,
    overflowY: "auto",
    zIndex: 1000,
  },
  suggestionItem: {
    display: "block",
    width: "100%",
    padding: theme.spacing(2, 2.5),
    textAlign: "left",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "0.95rem",
    color: "#1E293B",
    transition: "background-color 0.15s",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#F1F5F9",
    },
    "&:first-of-type": {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    "&:last-of-type": {
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
    },
  },
  suggestionTitle: {
    fontWeight: 600,
    display: "block",
  },
  suggestionMeta: {
    fontSize: "0.8rem",
    color: "#64748B",
    marginTop: 2,
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  techSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
  },
  filterByTechRow: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
  },
  filterByTechBtn: {
    borderRadius: 10,
  },
  clearTechBtn: {
    borderRadius: 10,
    color: "#DC2626",
    borderColor: "#DC2626",
    "&:hover": {
      backgroundColor: "rgba(220, 38, 38, 0.08)",
      borderColor: "#B91C1C",
      color: "#B91C1C",
    },
  },
  techButtonsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(4),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  techCategoryBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  techCategoryLabel: {
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  techButtons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(4),
  },
  techChip: {
    borderRadius: 8,
    textTransform: "none",
  },
}))

const Portfolio = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItem, setMenuItem] = useState(portfolio);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showTechFilters, setShowTechFilters] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const searchRef = useRef(null);

  const techCategories = getTechnicalCategories(portfolio);
  const categoryOrder = ["Languages", "Frameworks / Libraries", "Tools", "Technologies"];
  const orderedCategories = categoryOrder.filter(k => techCategories[k]?.length > 0);
  const hasTechProjects = orderedCategories.length > 0;

  const getMatchingProjects = (q, limit = 6) => {
    if (!q) return [];
    return portfolio
      .filter(item => getSearchableText(item).includes(q))
      .slice(0, limit);
  };

  const applyFilters = (baseData, overrides = {}) => {
    let result = baseData;
    const q = (overrides.searchQuery ?? searchQuery).trim().toLowerCase();
    if (q) {
      result = result.filter(item => getSearchableText(item).includes(q));
    }
    const tech = overrides.selectedTech ?? selectedTech;
    if (tech) {
      const normTech = normalizeTechName(tech);
      result = result.filter(item => {
        if (!item.category || typeof item.category !== "object" || Array.isArray(item.category)) return false;
        return Object.values(item.category).flat().some(v => normalizeTechName(v) === normTech);
      });
    }
    return result;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const q = query.trim().toLowerCase();
    if (!q) {
      setSuggestions([]);
      setShowSuggestions(false);
      setMenuItem(applyFilters(portfolio, { searchQuery: query }));
      return;
    }
    setMenuItem(applyFilters(portfolio, { searchQuery: query }));
    setSuggestions(getMatchingProjects(q));
    setShowSuggestions(true);
  };

  const handleTechSelect = (tech) => {
    const next = selectedTech === tech ? null : tech;
    setSelectedTech(next);
    setMenuItem(applyFilters(portfolio, { selectedTech: next }));
  };

  const handleSelectSuggestion = () => {
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleBlur = () => {
    // Delay to allow click on suggestion to register first
    setTimeout(() => setShowSuggestions(false), 150);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={classes.layout}>

      <div className={classes.searchFilterRow}>
        <div className={classes.searchWrapper}>
          <div className={classes.searchBox} ref={searchRef}>
            <div className={classes.search}>
              <SearchIcon className={classes.searchIcon} />
              <InputBase
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                onBlur={handleBlur}
                className={classes.inputInput}
                inputProps={{ "aria-label": "Search projects" }}
              />
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <div className={classes.suggestions}>
                {suggestions.map((item) => (
                  <Link
                    key={item.id}
                    to={{ pathname: '/portfolio/' + encodeURIComponent(item.title), state: { project: item } }}
                    className={classes.suggestionItem}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleSelectSuggestion}
                  >
                    <span className={classes.suggestionTitle}>{item.title}</span>
                    {item.description && (
                      <span className={classes.suggestionMeta}>
                        {(item.description || '').replace(/\*\*/g, '').length > 80 ? (item.description || '').replace(/\*\*/g, '').slice(0, 80) + "…" : (item.description || '').replace(/\*\*/g, '')}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {hasTechProjects && (
          <div className={classes.techSection}>
            <div className={classes.filterByTechRow}>
              <Button
                variant={showTechFilters ? "contained" : "outlined"}
                size="small"
                startIcon={<FilterListIcon />}
                onClick={() => setShowTechFilters(!showTechFilters)}
                className={classes.filterByTechBtn}
              >
                {showTechFilters ? "Hide tech filters" : "Filter by tech"}
              </Button>
              {selectedTech && (
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ClearIcon />}
                  onClick={() => handleTechSelect(null)}
                  className={classes.clearTechBtn}
                >
                  Clear filter
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {hasTechProjects && showTechFilters && (
        <div className={classes.techButtonsWrapper}>
          {orderedCategories.map((categoryName) => (
            <div key={categoryName} className={classes.techCategoryBlock}>
              <Typography variant="caption" className={classes.techCategoryLabel}>
                {categoryName}
              </Typography>
              <div className={classes.techButtons}>
                {techCategories[categoryName].map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? "contained" : "outlined"}
                    size="small"
                    onClick={() => handleTechSelect(tech)}
                    className={classes.techChip}
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <Menu menuItem={menuItem} searchActive={showSuggestions && suggestions.length > 0}/>
      <ScrollArrow/>
    </div>
  );
};

export default Portfolio;