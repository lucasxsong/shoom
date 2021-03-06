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
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
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
  },
  footer: {
    background: "#515052" 
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
    console.log("new items to update", event);
    let searchEngine = {};
    searchEngine.videos = event.videos;
    searchEngine.docs = event.docs;
    searchEngine.forums = event.forums;
    searchEngine.articles = event.articles;
    console.log('new state', searchEngine)
    this.setState({ searchEngine });
    console.log('updating search engine', this.state.searchEngine)
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
            searchVideos={this.state.searchEngine.videos}
            searchDocs={this.state.searchEngine.docs}
            searchArticles={this.state.searchEngine.articles}
            searchForums={this.state.searchEngine.forums}

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
