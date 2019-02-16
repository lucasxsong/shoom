import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import shumai from './shumai.png';



import SimpleCard from './SimpleCard.js';
import { FormControl } from '@material-ui/core';

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

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    // console.log(this.state.search);
  };

  handleSubmit = name => event => {
    this.setState({
      [name]: event.target.value
    });
    console.log(this.state.search);
  };

  render() {
    const { classes } = this.props;

    return (
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
          <FormControl>
            <TextField
              id="search-bar"
              label="Enter an equation, word problem, or just a concept you want to learn about!"
              placeholder="What are you curious about?"
              className={classes.textField}
              value={this.state.search}
              // onChange={this.handleChange('search')}
              onSubmit={this.handleSubmit('search')}
              margin="normal"
            />
          </FormControl>  
        </Grid>   

        </Grid> 
            
          
      </form>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
