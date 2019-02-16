import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import shumai from './shumai.png';

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


class SearchAPI extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/customsearch/v1?q=react&cx=009814564409014083669%3Ap0abuzhzwbs&key=AIzaSyBPimiYMdLwWK6XBSjbSer-alj76YukPwU")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.title}>
              {item.title} {item.link}
            </li>
          ))}
        </ul>
      );
    }
  }

}


class TextFields extends React.Component {
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

      <SearchAPI />

        

{/*
      <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
        <div>
          <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
          <input type="hidden" id="cx" name="cx" value="009814564409014083669:p0abuzhzwbs" />
          <input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit Search Query" />
        </div>
      </form> 
*/}
      
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
