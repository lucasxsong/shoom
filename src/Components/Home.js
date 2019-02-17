import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import shumai from './shumai.png';
import { Redirect } from 'react-router-dom'


import SimpleCard from './SimpleCard.js';
import { FormControl } from '@material-ui/core';
import Results from './Results';
import SearchBar from './SearchBar.js';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 420,
  },
  dense: {
    marginTop: 20,
  },
  menu: {
    width: 400,
  },
});

class Home extends React.Component {

    state = {
      search: '',
      hasSearched: false,
      searchEngine: {
        videos: [],
        docs: [],
        forums: [],
        articles: []
      }
    };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      hasSearched: true
    })
  }

  handleChange = event => {
    console.log('Called handleChange correctly.');
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { classes } = this.props;


    return (
      <div id="search-bar-display">
        <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit} classes={ {classes} } searchQuery={this.state.search}/>
      </div>
      
      // <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        
      //   <Grid
      //     container
      //     spacing={0}
      //     direction="column"
      //     alignItems="center"
      //     justify="center"
      //     style={{ minHeight: '10vh' , minWidth: "10vh"}}
      //   > 
      //   <br/> <br />
      //   <img src={shumai}  width={100} marginTop={50} mode='fit'/>
      //   <h2> shumai </h2>

      //   </Grid>
      //    <Grid
      //     container
      //     spacing={0}
      //     direction="column"
      //     alignItems="center"
      //     justify="center"
          
      //     style={{ minHeight: '40vh' }}
      //   > 

      //   <Grid item xs ={6}>
      //   <SimpleCard />  
      //   </Grid>

      //   <Grid item xs={6}>
      //     <TextField
      //       id="search-bar"
      //       label="Enter a framework or technology you want to learn about."
      //       placeholder="What are you curious about?"
      //       value={this.state.search}
      //       onChange={this.handleChange}
      //       className={classes.textField}
      //       margin="normal"
      //     /> 
      //   </Grid>   

      //   </Grid> 
            
          
      // </form>

    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
