import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import shumai from "./shumai.png";
import Search from "./Search.js";

import SimpleCard from "./SimpleCard.js";
import { FormControl } from "@material-ui/core";
import Results from "./Results";
import SearchBar from "./SearchBar.js";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 420
  },
  dense: {
    marginTop: 20
  },
  menu: {
    width: 400
  }
});

class Home extends React.Component {
  state = {
    search: "",
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
    });
  };

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    if(this.state.hasSearched === false) {
      //Render the search-bar page
      return (
        <div id="search-bar-display">
          <SearchBar
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            classes={{ classes }}
          />
        </div>  
      );
    }
    else {
      //Render the search API and results page
      return (
        <div id="test">
          <h1>Hello World!</h1>
        </div>
      );  
    }
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
