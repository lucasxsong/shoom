import React from "react";
import Preview from "./Preview.js";
import Results from "./Results.js";
import Route from "../App.js";
import { Redirect } from "react-router";

class Search extends React.Component {
  async componentDidMount() {
    try {
      var searchTerms = this.props.query;
      const googleString =
        "https://www.googleapis.com/customsearch/v1?q=" +
        this.props.query +
        "&cx=001411889088445407942:9ydhowmyqyq&key=AIzaSyDxW_xjrBiK7NIorOpioD5f6cvBjeGfw9Q";
      // console.log(googleString);
      const rawData = await fetch(googleString);
      // const rawData = await fetch(
      //   "https://www.googleapis.com/customsearch/v1?q=query&cx=001608508911589604671:q8d2bskgh54&key=AIzaSyA1TOKf4HOIDbu456zWSMlKD1Q1_JWKCPo"
      // );
      const jsonData = await rawData.json();

      // console.table(jsonData);
      var searchVideos = [];
      var searchForums = [];
      var searchDocs = [];
      var searchArticles = [];

      jsonData.items.forEach(item => {
        if (/youtube|khanacademy|vimeo/.test(item.link.toLowerCase())) {
          searchVideos.push(item);
        } else if (
          /stackoverflow|medium|reddit|github/.test(item.link.toLowerCase())
        ) {
          searchForums.push(item);
        } else if (item.link.toLowerCase().includes(".org")) {
          searchDocs.push(item);
        } else {
          searchArticles.push(item);
        }
      });
      
      var searchResults = {
        videos: searchVideos,
        forums: searchForums,
        docs: searchDocs,
        articles: searchArticles,
      }
      
      console.log('search', this.props.searchVideos);
      this.props.addResults(searchResults); //Update Home state variables with result lists
    } catch (e) {
      this.setState({
        error: e,
        isLoaded: true
      });
    }
  }

  render() {
    return null;
  }
}

export default Search;
