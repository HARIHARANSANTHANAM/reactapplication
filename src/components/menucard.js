import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../style/homedish.css";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    margin: theme.spacing(2)
  },
  media: {
    height: 190
  }
}));

const options = ["View Trailer", "View Roles", "Book Ticket"];
function Media(props) {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;
  return (
    <div className="row" id="row">
      <Card className={classes.card}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2016%2F05%2FX-Men-Apocalypse-launch-quad-poster-1200x903.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch"
                    }
                  }}
                >
                  {options.map(option => (
                    <MenuItem
                      key={option}
                      selected={option === "View Trailer"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              "Ted"
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              "5 hours ago"
            )
          }
        />
        {loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          <CardMedia
            className={classes.media}
            image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2016%2F05%2FX-Men-Apocalypse-launch-quad-poster-1200x903.jpg"
            title="Ted talk"
          />
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography variant="body2" color="textSecondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>{" "}
              <br />
              <Typography variant="body2" color="textSecondary">
                Ratings of this Movie
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </Box>
          )}
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://i.pinimg.com/originals/78/8b/ba/788bba744fa9d53cee0e7340d7950fa7.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch"
                    }
                  }}
                >
                  {options.map(option => (
                    <MenuItem
                      key={option}
                      selected={option === "View Trailer"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              "Ted"
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              "5 hours ago"
            )
          }
        />
        {loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          <CardMedia
            className={classes.media}
            image="https://i.pinimg.com/originals/78/8b/ba/788bba744fa9d53cee0e7340d7950fa7.jpg"
            title="Ted talk"
          />
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography variant="body2" color="textSecondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>{" "}
              <br />
              <Typography variant="body2" color="textSecondary">
                Ratings of this Movie
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </Box>
          )}
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://pulsefeedz.files.wordpress.com/2015/04/furious-7-2.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch"
                    }
                  }}
                >
                  {options.map(option => (
                    <MenuItem
                      key={option}
                      selected={option === "View Trailer"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              "Ted"
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              "5 hours ago"
            )
          }
        />
        {loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          <CardMedia
            className={classes.media}
            image="https://pulsefeedz.files.wordpress.com/2015/04/furious-7-2.jpg"
            title="Ted talk"
          />
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography variant="body2" color="textSecondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>{" "}
              <br />
              <Typography variant="h6" color="textSecondary">
                Ratings of this Movie
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </Box>
          )}
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                alt="Ted talk"
                src="https://images-na.ssl-images-amazon.com/images/I/A1lsDc0AZTL._AC_SX466_.jpg"
              />
            )
          }
          action={
            loading ? null : (
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch"
                    }
                  }}
                >
                  {options.map(option => (
                    <MenuItem
                      key={option}
                      selected={option === "View Trailer"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            )
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              "Ted"
            )
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              "5 hours ago"
            )
          }
        />
        {loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          <CardMedia
            className={classes.media}
            image="https://images-na.ssl-images-amazon.com/images/I/A1lsDc0AZTL._AC_SX466_.jpg"
            title="Ted talk"
          />
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography variant="body2" color="textSecondary" component="p">
                {
                  "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                }
              </Typography>{" "}
              <br />
              <Typography variant="body2" color="textSecondary">
                Ratings of this Movie
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </Box>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

Media.propTypes = {
  loading: PropTypes.bool
};

export default function Facebook() {
  return (
    <div>
      <Media loading />
    </div>
  );
}
