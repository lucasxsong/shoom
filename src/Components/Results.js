import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import MediaCard from "./Cards/MediaCard.js";
import HorizScroll from "./HorizScroll.js";

import "./Results.css";

// sort by type, sorting from data set unsorted

const list1 = [
  {
    name: "name1",
    title: "this is list one",
    snippet: "cool video on react",
    preview: "https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg",
    url: "https://khanacademy.com",
    type: "video"
  },

  {
    name: "item2",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  },

  {
    name: "item3",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  },

  {
    name: "item4",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview: "https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg",
    url: "khanacademy.com",
    type: "video"
  },

  {
    name: "item5",
    title: "react js tutorials",
    snippet:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  }
];

const list2 = [
  {
    name: "name1",
    title: "this is list 2",
    snippet: "cool video on react",
    preview: "https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg",
    url: "https://khanacademy.com",
    type: "video"
  },

  {
    name: "item2",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  },

  {
    name: "item3",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  },

  {
    name: "item4",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview: "https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg",
    url: "khanacademy.com",
    type: "video"
  },

  {
    name: "item5",
    title: "react js tutorials",
    snippet:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  }
];

const list3 = [
  {
    name: "item3",
    title: "this is list 3",
    snippet: "cool video on react",
    preview: "https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg",
    url: "https://khanacademy.com",
    type: "video"
  },

  {
    name: "item2",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  },

  {
    name: "item3",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  },

  {
    name: "item4",
    title: "react js tutorials",
    snippet: "quick tips on getting started with react js, ez tutorial",
    preview: "https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg",
    url: "khanacademy.com",
    type: "video"
  },

  {
    name: "item5",
    title: "react js tutorials",
    snippet:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    preview:
      "https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67",
    url: "https://khanacademy.com",
    type: "website"
  }
];

const styles = {
  card: {},
  media: {
    height: 150
  }
};
// idea (?)
// can change xs values to dictate weighted categories
class Results extends React.Component {
  render() {
    const { classes} = this.props.classes;

     //console.log("RESULTS");
     console.table(this.searchVideos);

     //console.table(this.searchResults.forums);

     //console.table(this.searchResults.docs);

      //console.table(this.searchResults.articles);

      
    return (
      <div class="resultBody">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item xs>
            <Card className = {classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h7">
                    We found some
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    forums buzzing about{" "}
                    <mark>
                      <b>{this.props.query}</b>
                    </mark>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <HorizScroll list={this.props.searchForums} />

              <Typography component="p" />
            </Card>
          </Grid>

          <Grid item xs>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h7">
                    and some
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    videos explaining{" "}
                    <mark>
                      <b>{this.props.query}</b>
                    </mark>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <HorizScroll list={this.props.searchVideos} />
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h7">
                    and some
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    documentation on{" "}
                    <mark>
                      <b>{this.props.query}</b>
                    </mark>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <HorizScroll list={this.props.searchDocs} />
            </Card>
          </Grid>

          <Grid item xs>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h7">
                    and some
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h3">
                    articles on{" "}
                    <mark>
                      <b>{this.props.query}</b>
                    </mark>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <HorizScroll list={this.props.searchArticles} />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

// export default withStyles(styles)(Results);
export default Results;
