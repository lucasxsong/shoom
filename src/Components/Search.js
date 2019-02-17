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
      // videos: [],
      // docs: [],
      // forums: [],
      // articles: []
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


      const newResults = {
        videos,
        docs,
        articles,
        forums
      };

      // this.setState({
      //   results: newResults,
      //   isLoaded: true
      // });
      this.props.addResults();
      console.log('Search.test')

    } catch (e) {
      this.setState({
        error: e,
        isLoaded: true
      });
    }
  }

  render() {
    return(null);
    // const { error, isLoaded, results } = this.state;

    // return (
    //   <div>
    //     {error ? (
    //       <div>Error: {error.message} </div>
    //     ) : (
    //       <>
    //         <ul>
    //           {videos.map(tile => (
    //             <li key={tile.title}>
    //               {/* {" "} */}
    //               {tile.title}
    //               {tile.snippet}
    //               <Preview />
    //             </li>
    //           ))}{" "}
    //         </ul>

    //         <ul>
    //           {forums.map(tile => (
    //             <li key={tile.title}>
    //               {" "}
    //               {tile.title}
    //               {tile.snippet}
    //               <Preview />
    //             </li>
    //           ))}{" "}
    //         </ul>
    //       </>
    //     )}
    //   </div>
    // );
  }
}

export default Search;
