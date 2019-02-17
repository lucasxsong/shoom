import React from "react";
import Preview from "./Preview.js";
import Results from "./Results.js";
import Route from "../App.js";
import { Redirect } from "react-router";

class Search extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    results: {
      videos: [],
      docs: [],
      forums: [],
      articles: []
    }
  };

  async componentDidMount() {
    try {
      const rawData = await fetch(
        "https://www.googleapis.com/customsearch/v1?q=react&cx=001608508911589604671:q8d2bskgh54&key=AIzaSyA1TOKf4HOIDbu456zWSMlKD1Q1_JWKCPo"
      );
      const jsonData = await rawData.json();

      const videos = [];
      const docs = [];
      const forums = [];
      const articles = [];

      jsonData.items.forEach(item => {
        if (/youtube|khanacademy|vimeo/.test(item.link.toLowerCase())) {
          videos.push(item);
        } else if (
          /stackoverflow|medium|reddit|github/.test(item.link.toLowerCase())
        ) {
          forums.push(item);
        } else if (item.link.toLowerCase().includes(".org")) {
          docs.push(item);
        } else {
          articles.push(item);
        }
      });

      console.table(videos);

      const newResults = {
        videos,
        docs,
        articles,
        forums
      };

      this.setState({
        results: newResults,
        isLoaded: true
      });
    } catch (e) {
      this.setState({
        error: e,
        isLoaded: true
      });
    }
  }

  render() {
    const { error, isLoaded, results } = this.state;

    return (
      <div>
        {error ? (
          <div>Error: {error.message} </div>
        ) : (
          <>
            <ul>
              {results.videos.map(tile => (
                <li key={tile.title}>
                  {/* {" "} */}
                  {tile.title}
                  {tile.snippet}
                  <Preview />
                </li>
              ))}{" "}
            </ul>

            <ul>
              {results.forums.map(tile => (
                <li key={tile.title}>
                  {" "}
                  {tile.title}
                  {tile.snippet}
                  <Preview />
                </li>
              ))}{" "}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Search;
