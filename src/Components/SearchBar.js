import React from "react";
import TextField from "@material-ui/core/TextField";
import logo from "./shoom_logo.png";
import SimpleCard from "./SimpleCard.js";
import Grid from "@material-ui/core/Grid";
import Home from "./Home.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class SearchBar extends React.Component {
  render() {
    const { classes } = this.props.classes;

    return (
      <>
        <style>{"body { background-color: #333138; }"}</style>
        <link
          href="https://fonts.googleapis.com/css?family=Mukta"
          rel="stylesheet"
        />
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={this.props.onSubmit}
        >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "10vh", minWidth: "10vh" }}
          >
            <br /> <br />
            <div>
              <img src={logo} width={128} marginTop={273} />
              <h2
                style={{
                  position: "absolute",
                  width: "229px",
                  height: "115px",
                  top: "274px",
                  right: "732px",
                  fontFamily: "Mukta",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  lineHeight: "normal",
                  fontSize: "72px",
                  color: "#FFFFFA",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                }}
              >
                shoom
              </h2>
              <div
                style={{
                  position: "absolute",
                  width: "0px",
                  height: "168px",
                  top: "262.5px",
                  border: "2px solid #515052"
                }}
              />
              <p
                style={{
                  position: "absolute",
                  width: "328px",
                  height: "131px",
                  top: "282px",
                  right: "326px",
                  fontFamily: "Mukta",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  lineHeight: "normal",
                  fontSize: "18px",
                  color: "#E8E8E4"
                }}
              >
                Learn new frameworks, technologies, and more at the click of a
                button. Discover how you learn and get resources and materials
                delivered in an easy-to-navigate layout.
              </p>
            </div>
          </Grid>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "40vh" }}
          >
            <Grid item xs={6}>
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
          <div
            style={{
              position: "absolute",
              width: "1440px",
              height: "227px",
              bottom: "0px",
              background: "#515052"
            }}
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
