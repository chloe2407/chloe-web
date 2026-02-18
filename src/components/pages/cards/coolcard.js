import React from 'react';
import ReactDOM from 'react-dom';
import { formatDescriptionWithBold } from '../../../utils/formatDescription.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  root: {
    width: "100%",
    maxWidth: 320,
    minWidth: 280,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
      transform: "translateY(-4px)",
    },
  },
  container: { position: "relative", overflow: "hidden" },
  overlay: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)",
    padding: theme.spacing(2),
    gap: theme.spacing(1),
    flexWrap: "wrap",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    transition: "transform 0.3s ease",
    "&:hover": { transform: "scale(1.05)" },
  },
  link: {
      textDecoration: "none",
      color: "inherit",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: { transform: 'rotate(180deg)' },
  cardContent: { padding: theme.spacing(2, 2.5) },
  previewBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    zIndex: 1400,
    pointerEvents: "none",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.2s ease, visibility 0.2s ease",
  },
  previewBackdropVisible: {
    opacity: 1,
    visibility: "visible",
  },
  previewPopup: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    maxWidth: "92vw",
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
    overflow: "hidden",
    zIndex: 1401,
    pointerEvents: "none",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.2s ease, visibility 0.2s ease",
  },
  previewPopupVisible: {
    opacity: 1,
    visibility: "visible",
    transform: "translate(-50%, -50%)",
  },
  previewImage: {
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
  previewContent: {
    padding: theme.spacing(3.5),
  },
  previewTitle: {
    fontWeight: 600,
    color: "#1E293B",
    marginBottom: theme.spacing(1.5),
    fontSize: "1.35rem",
  },
  previewDesc: {
    fontSize: "1.05rem",
    color: "#64748B",
    lineHeight: 1.6,
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
}));

// Normalize category to array (portfolio has both array and object formats)
function getCategoryArray(category) {
  if (!category) return [];
  if (Array.isArray(category)) return category;
  if (typeof category === "object") return Object.values(category).flat();
  return [];
}

const HOVER_DELAY_MS = 1000;

export default function CoolCardClick(props) {
  const { searchActive = false } = props;
  const classes = useStyles();
  const hoverTimerRef = React.useRef(null);
  const [isShown, setIsShown] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);
  const categoryArr = getCategoryArray(props.category);

  React.useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);
  const imgSrc = props.img || props.image;
  const desc = props.description || "";
  const previewPopup = showPreview ? (
    <>
      <div className={`${classes.previewBackdrop} ${classes.previewBackdropVisible}`} />
      <div className={`${classes.previewPopup} ${classes.previewPopupVisible}`}>
        <img src={imgSrc} alt={props.title} className={classes.previewImage} />
        <div className={classes.previewContent}>
          <Typography className={classes.previewTitle}>{props.title}</Typography>
          {desc && <Typography className={classes.previewDesc} component="div">{formatDescriptionWithBold(desc)}</Typography>}
        </div>
      </div>
    </>
  ) : null;

  return (
    <div
      className={classes.wrapper}
      onMouseEnter={() => {
        if (searchActive) return;
        hoverTimerRef.current = setTimeout(() => {
          setIsShown(true);
          setShowPreview(true);
          hoverTimerRef.current = null;
        }, HOVER_DELAY_MS);
      }}
      onMouseLeave={() => {
        if (hoverTimerRef.current) {
          clearTimeout(hoverTimerRef.current);
          hoverTimerRef.current = null;
        }
        setIsShown(false);
        setShowPreview(false);
      }}
    >
      {previewPopup && ReactDOM.createPortal(previewPopup, document.body)}
    <Card className={classes.root}>
      <Link to={{ pathname: '/portfolio/' + encodeURIComponent(props.title), state: { project: props } }} className={classes.link}>
      <CardActionArea className={classes.container}>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={props.title}
        />
        {isShown && (
        <div className={classes.overlay}>
        {categoryArr.slice(0, 4).map((item, i) => (
          <Button key={i} variant="contained" size="small" style={{ backgroundColor: "#fff", color: "#1E293B", fontWeight: 500 }}>{item}</Button>
        ))
        }
        </div>
        )}
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" component="h2" style={{ fontWeight: 600, color: "#1E293B" }}>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
      {/* <ClickAwayListener onClickAway={handleClickAwayEvent}>
		<div
		style={{
			position: "relative",
		}}
		>
		<IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
		{open ? (<div></div>) : null}
		</div>
	</ClickAwayListener> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.description}
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
    </div>
  );
}
