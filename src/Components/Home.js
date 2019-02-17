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
import Results from "./Results.js";
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

  addResults = event => {
    console.log("Event: ", event);
    let searchEngine = { ...this.state.searchEngine };
    searchEngine.videos = event.videos;
    searchEngine.docs = event.docs;
    searchEngine.forums = event.forums;
    searchEngine.articles = event.articles;
    this.setState({ searchEngine });
  };

  render() {
    const { classes } = this.props;

    if (this.state.hasSearched === false) {
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
    } else {
      //Render the search API and results page
      //FIXME: Implement Search functions HERE
      return (
        <div id="results-display">
          <Search
            searchVideos={this.state.searchEngine.videos}
            searchForums={this.state.searchEngine.forums}
            searchDocs={this.state.searchEngine.docs}
            searchArticles={this.state.searchEngine.articles}
            addResults={this.addResults}
            query={this.state.search}
          />
          <Results
            query={this.state.search}
            searchResults={this.state.searchEngine}
            classes={{ classes }}
          />
        </div>
      );
    }
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
