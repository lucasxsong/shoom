import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MaterialIcon, {colorPalette} from 'material-icons-react';


const styles = {
  card: {
    maxWidth: 250,
    margin: 10,
    whiteSpace: 'pre-wrap',
    size: 5,
  },
  media: {
    height: 120,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={classes.preview}
          title={classes.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {classes.title}
          </Typography>
          <Typography component="p">
            {classes.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
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

