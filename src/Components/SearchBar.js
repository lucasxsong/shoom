import React from "react";
import TextField from "@material-ui/core/TextField";
import logo from "./shoom_logo.png";
import SimpleCard from "./SimpleCard.js";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
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
          className={classes.box}
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
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={logo} width={128} marginTop={273}/>
                <h2
                  style={{
                    // height: "115px",
                    // top: "274px",
                    // right: "732px",
                    fontFamily: "Mukta",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    lineHeight: "normal",
                    fontSize: "72px",
                    color: "#FFFFFA",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    marginRight: "64px"
                  }}
                >
                  shoom
                </h2>
                <div id="divide-bar"
                  style={{
                    width: "0px",
                    height: "168px",
                    // top: "262.5px",
                    border: "2px solid #515052"
                  }}
                ></div>
                <div style={{width: "300px", marginLeft: "64px"}}>
                <p
                  style={{
          
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
              {/* Search-Bar Object */}
              <Paper className={classes.root} elevation={1}>
                <InputBase
                  className={classes.input}
                  placeholder="Shoom something new."
                  onChange={this.props.onChange}
                  margin="normal"
                  />
                  <IconButton className={classes.iconButton} aria-label="Search" onClick={this.props.onSubmit}>
                    <SearchIcon />
                  </IconButton>
              </Paper>
            </Grid>
          </Grid>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "227px",
              bottom: "0",
              background: "#515052"
            }}
          />
        </form>
      </>
    );
  }
}

export default SearchBar;
