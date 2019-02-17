import React from "react";
import Preview from "./Preview.js";
import Results from "./Results.js";
import Route from "../App.js";
import { Redirect } from "react-router";

class Search extends React.Component {

  async componentDidMount() {
    try {
      const googleString = "#https://www.googleapis.com/customsearch/v1?q=" + this.props.query + "&cx=001608508911589604671:q8d2bskgh54&key=AIzaSyA1TOKf4HOIDbu456zWSMlKD1Q1_JWKCPo";
      const rawData = await fetch(
        {googleString}
      );
      const jsonData = await rawData.json();

      jsonData.items.forEach(item => {
        if (/youtube|khanacademy|vimeo/.test(item.link.toLowerCase())) {
          this.props.searchVideos.push(item);
        } else if (
          /stackoverflow|medium|reddit|github/.test(item.link.toLowerCase())
        ) {
          this.props.searchForums.push(item);
        } else if (item.link.toLowerCase().includes(".org")) {
          this.props.searchDocs.push(item);
        } else {
          this.props.searchArticles.push(item);
        }
      });

      this.props.addResults();  //Update Home state variables with result lists

    } catch (e) {
      this.setState({
        error: e,
        isLoaded: true
      });
    }
  }

  render() {
    return(null);
  }
}

export default Search;
