import React from 'react';
import TextField from '@material-ui/core/TextField';
import shumai from './shumai.png';
import SimpleCard from './SimpleCard.js';
import Grid from '@material-ui/core/Grid';
import Home from './Home.js'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

class SearchBar extends React.Component {
    
    render() {
        const { classes } = this.props.classes;
    
        return (
          <form className={classes.container} noValidate autoComplete="off" onSubmit={ this.props.onSubmit }>
            
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '10vh' , minWidth: "10vh"}}
            > 
            <br/> <br />
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
              {/* Search-Bar Object */}
              <TextField
                id="search-bar"
                label="Enter a framework or technology you want to learn about."
                placeholder="What are you curious about?"
                onChange={this.props.onChange}
                className={classes.textField}
                margin="normal"
              /> 
            </Grid>   
    
            </Grid> 
                
              
          </form>
        );
      }

}

export default SearchBar;