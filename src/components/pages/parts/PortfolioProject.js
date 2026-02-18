import { makeStyles, Typography, Button, Chip } from '@material-ui/core';
import React from 'react';
import { formatDescriptionWithBold } from '../../../utils/formatDescription.js';
import { useParams, useHistory } from 'react-router-dom';
import portfolio from '../../../data/portfolio.js';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 900,
    margin: "0 auto",
    padding: theme.spacing(4, 2),
  },
  backButton: {
    marginBottom: theme.spacing(3),
    textTransform: "none",
  },
  heroImage: {
    width: "100%",
    height: 320,
    objectFit: "cover",
    borderRadius: 16,
    marginBottom: theme.spacing(4),
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  },
  title: {
    marginBottom: theme.spacing(2),
    color: "#1E293B",
    fontWeight: 700,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  chip: {
    fontWeight: 500,
  },
  description: {
    lineHeight: 1.8,
    color: "#475569",
    marginBottom: theme.spacing(5),
  },
  sectionTitle: {
    marginBottom: theme.spacing(3),
    color: "#1E293B",
    fontWeight: 600,
  },
  linksGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  linkButton: {
    textTransform: "none",
    fontWeight: 600,
  },
  gallerySection: {
    marginTop: theme.spacing(6),
  },
  galleryItem: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 12,
    backgroundColor: "#FAFBFC",
    border: "1px solid #E2E8F0",
    textDecoration: "none",
    color: "inherit",
    display: "block",
    cursor: "pointer",
    transition: "box-shadow 0.2s, border-color 0.2s",
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      borderColor: "#94A3B8",
    },
  },
  galleryItemTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: "#1E293B",
  },
  galleryItemDesc: {
    marginBottom: theme.spacing(2),
    color: "#64748B",
    lineHeight: 1.6,
    fontSize: 15,
  },
  galleryItemImage: {
    width: "100%",
    maxHeight: 280,
    objectFit: "cover",
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },
}));

function getCategoryArray(category) {
  if (!category) return [];
  if (Array.isArray(category)) return category;
  return Object.values(category).flat().filter(Boolean);
}

function getLinksFromGallery(gallery) {
  if (!gallery) return [];
  const links = [];
  gallery.forEach(item => {
    if (item.name && item.link) {
      links.push({ name: item.name, link: item.link });
    } else if (item.gallery) {
      item.gallery.forEach(sub => {
        if (sub.name && sub.link) links.push({ name: sub.name, link: sub.link });
      });
    }
  });
  return links;
}

function getGalleryItems(gallery) {
  if (!gallery) return [];
  return gallery.filter(item => item.title || item.image);
}

const PortfolioProject = (props) => {
  const classes = useStyles();
  const { name } = useParams();
  const history = useHistory();
  const decodedName = name ? decodeURIComponent(name) : "";
  const project = props.location?.state?.project || props.location?.prop
    || portfolio.find(p => p.title === decodedName || encodeURIComponent(p.title) === name);

  if (!project) {
    return (
      <div className={classes.root}>
        <Button onClick={() => history.push("/portfolio")} className={classes.backButton}>
          ← Back to Portfolio
        </Button>
        <Typography variant="h5">Project not found</Typography>
      </div>
    );
  }

  const imgSrc = project.image || project.img;
  const categoryArr = getCategoryArray(project.category);
  const links = getLinksFromGallery(project.gallery);
  const galleryItems = getGalleryItems(project.gallery);

  return (
    <div className={classes.root}>
      <Button onClick={() => history.push("/portfolio")} className={classes.backButton} color="primary">
        ← Back to Portfolio
      </Button>

      {imgSrc && (
        <img src={imgSrc} className={classes.heroImage} alt={project.title} />
      )}

      <Typography variant="h4" className={classes.title}>{project.title}</Typography>

      {categoryArr.length > 0 && (
        <div className={classes.chips}>
          {categoryArr.map((cat, i) => (
            <Chip key={i} label={cat} className={classes.chip} color="primary" variant="outlined" size="small" />
          ))}
        </div>
      )}

      {project.description && (
        <Typography variant="body1" className={classes.description} component="div">
          {formatDescriptionWithBold(project.description)}
        </Typography>
      )}

      {links.length > 0 && galleryItems.length === 0 && (
        <>
          <Typography variant="h6" className={classes.sectionTitle}>Links</Typography>
          <div className={classes.linksGrid}>
            {links.map((item, i) => (
              <Button
                key={i}
                variant="contained"
                color="primary"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.linkButton}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </>
      )}

      {galleryItems.length > 0 && (
        <div className={classes.gallerySection}>
          <Typography variant="h6" className={classes.sectionTitle}>Gallery</Typography>
          {galleryItems.map((item, i) => {
            const primaryLink = item.link || (item.gallery && item.gallery[0]?.link);
            const CardWrapper = primaryLink ? "a" : "div";
            const cardProps = primaryLink
              ? { href: primaryLink, target: "_blank", rel: "noopener noreferrer", className: classes.galleryItem }
              : { className: classes.galleryItem };
            return (
              <CardWrapper key={i} {...cardProps}>
                {item.title && (
                  <Typography variant="h6" className={classes.galleryItemTitle}>{item.title}</Typography>
                )}
                {item.description && (
                  <Typography variant="body2" className={classes.galleryItemDesc}>{item.description}</Typography>
                )}
                {item.image && (
                  <img src={item.image} alt={item.title} className={classes.galleryItemImage} />
                )}
                {item.gallery && item.gallery.length > 1 && (
                  <div className={classes.linksGrid} onClick={(e) => e.stopPropagation()}>
                    {item.gallery.map((sub, j) => sub.link && (
                      <Button
                        key={j}
                        variant="outlined"
                        color="primary"
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        {sub.name || "View"}
                      </Button>
                    ))}
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PortfolioProject;
