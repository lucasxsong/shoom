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



const styles = {
  card: {
    height: 800,

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
    direction="row"
    justify="space-evenly"
    alignItems="center"
  >

<Grid item xs>

<Card className={classes.card}>
  <CardActionArea>
    <CardContent>
        <Typography gutterBottom variant="h6" component="h7">
        We found some
      </Typography>
      <Typography gutterBottom variant="h4" component="h2">
        PDFs on <b>React</b> 
      </Typography>
      <Typography component="p">
        <ul> 
            <li>
                link one
            </li>
            <li>
                link two 
            </li>
            <li>
                link three
            </li>
            <li>
                link four
            </li>
            <li>
                link five
            </li>
        </ul>
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Keep
    </Button>
    <Button size="small" color="primary">
      Read more
    </Button>
  </CardActions>
</Card>
</Grid>

  <Grid item xs>

    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h7">
            and also
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            videos explaning <b>React</b>
          </Typography>
          <Typography component="p">
            
<iframe width="250" src="https://www.youtube.com/embed/Ke90Tje7VS0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="250"  src="https://www.youtube.com/embed/DLX62G4lc44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="250" src="https://www.youtube.com/embed/jL_ILGuz2aw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Keep 
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
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
            websites talking about <b>React</b>
          </Typography>
          <Typography component="p">
            
<iframe width="250" src="https://www.youtube.com/embed/Ke90Tje7VS0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="250"  src="https://www.youtube.com/embed/DLX62G4lc44" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="250" src="https://www.youtube.com/embed/jL_ILGuz2aw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Keep 
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);