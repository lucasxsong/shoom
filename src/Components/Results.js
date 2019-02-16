import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import MediaCard from './Cards/MediaCard.js';
import HorizScroll from './HorizScroll.js';

import './Results.css';

// sort by type, sorting from data set unsorted 



const styles = {
  card: {
    
  },
  media: {
    height: 150,
  },
};
// idea (?)
// can change xs values to dictate weighted categories
function Results(props) {
  
  const { classes } = props;
  return (
  <div class = "resultBody"> 
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="stretch"
  >

<Grid item xs>

<Card className={classes.card}>
  <CardActionArea>
    <CardContent>
        <Typography gutterBottom variant="h6" component="h7">
        We found some
      </Typography>
      <Typography gutterBottom variant="h5" component="h3">
        forums buzzing about <mark><b>React</b></mark>
      </Typography>
      </CardContent>
      </CardActionArea>
      <HorizScroll />

      <Typography component="p">
        
      </Typography>
    
</Card>
</Grid>

  <Grid item xs>

    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h7">
            and some
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            videos explaining <mark><b> React </b></mark>
          </Typography>
          </CardContent>
          </CardActionArea>
          <HorizScroll />
        
    </Card>
    </Grid>
    <Grid item xs>

    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h7">
            and also some
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            documentation on <mark><b> React </b></mark>
          </Typography>
          </CardContent>
        </CardActionArea>
          <HorizScroll />
        
    </Card>
    </Grid>
    </Grid>
    </div>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);