import React from 'react';
import Preview from './Preview.js';
{/*import firebase from '../firebase.js';*/}

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
      items: [],
      youtube: []
    }
    {/*this.handleChange = this.handleChange.bind(this);*/}
	}

  componentDidMount() {
    fetch("https://www.googleapis.com/customsearch/v1?q=react&cx=009814564409014083669%3Ap0abuzhzwbs&key=AIzaSyBPimiYMdLwWK6XBSjbSer-alj76YukPwU")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          })
          console.table(result.items);

          const youtube = [];

          result.items.forEach(item => {
            if(item.title.includes('React')) {
              youtube.push(item);
            }
          })
          this.setState({youtube})
          },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    
    {/*const { error, isLoaded, items } = this.state;
    const youtube = [];

    console.table(this.state.items);

    this.state.items.forEach(item => {
      if ('youtube' in item.displayLink === true) {
        youtube.push(item);
      }
      else {
        youtube.push(item);
      }
    })
    this.setState({youtube})
  */}
  }

  render() {
    const { error, isLoaded, items, youtube } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {/*
          {items.map(item => (
            <li key={item.title}>
              {item.title} {item.snippet}
              <Preview />
            </li>
          ))}
          */}
          {youtube.map(tile => (
            <li key={tile.title}>
              {tile.title} {tile.snippet}
              <Preview />
            </li>
          ))}
        </ul>
      );
    }
  }


}

export default Search;