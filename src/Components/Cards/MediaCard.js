import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

import MaterialIcon, {colorPalette} from 'material-icons-react';


const styles = {
  card: {
    maxWidth: 250,
    maxHeight: 250,
    margin: 5,
    whiteSpace: 'pre-wrap',
    size: 5,
    background: '#fff3e0',
  },
  media: {
    height: 120,
  },
};

function MediaCard(props) {
  const { classes, data } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
      <a href = {data.link} target = "_blank">
        <CardMedia
          className={classes.media}
          image= {data.preview}
          title={data.name}
        />
        </a>
        <CardContent>
          <Typography component="p" variant = "p">
            {data.snippet} by 
          </Typography>
          <Typography component="h6" variant ="h7">
          {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions>
        <Button href = {data.preview} size="small" color="primary">
        <MaterialIcon icon="bookmark" />
        </Button>
        <Button size="small" color="primary">
        <MaterialIcon icon="thumb_up" />
        </Button>
        <Button size="small" color="primary">
        <MaterialIcon icon="thumb_down" />
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

