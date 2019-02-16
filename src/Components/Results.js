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
import Grid from '@material-ui/core/Grid';

import MediaCard from './Cards/MediaCard.js';
import HorizScroll from './HorizScroll.js';



const styles = {
  card: {
    height: 450,

  },
  media: {
    height: 150,
  },
};
// can change xs values to dictate weighted categories
function Results(props) {
  const { classes } = props;
  return (
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
      <Typography gutterBottom variant="h4" component="h2">
        PDFs on <mark><b>React</b></mark>
      </Typography>
      <HorizScroll />

      <Typography component="p">
        
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</Grid>

  <Grid item xs>

    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h7">
            and some
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            videos explaining <mark><b>React</b></mark>
          </Typography>
          <HorizScroll />
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs>

    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h7">
            and also some
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            websites about <mark><b>React</b></mark>
          </Typography>
          <HorizScroll />
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);