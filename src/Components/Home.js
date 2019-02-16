import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import shumai from './shumai.png';
import Search from './Search.js';



import SimpleCard from './SimpleCard.js';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 550,
  },
  dense: {
    marginTop: 20,
  },
  menu: {
    width: 400,
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '10vh' , minWidth: "10vh"}}
          > 
          <br/>
          <img src={shumai}  width={100} marginTop={50} mode='fit'/>
          <h2> shumai </h2>

          </Grid>
           <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            
            style={{ minHeight: '40vh' }}
          > 

          <Grid item xs ={6}>
          <SimpleCard />  
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="standard-textarea"
              label="Enter an equation, word problem, or just a concept you want to learn about!"
              placeholder="Placeholder"
              multiline
              className={classes.textField}
              margin="normal"
            />  
          </Grid>   

          </Grid> 
              
            
        </form>

        <Search />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
