import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './HorizScroll.css';
import { withStyles } from '@material-ui/core';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import WebsiteCard from './Cards/WebsiteCard.js';
import MediaCard from './Cards/MediaCard.js';
 
// list of items
const list1 = [
  { name: 'item1',
      title: 'react js tutorials',
    snippet: 'cool video on react',
    preview: 'https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg',
    url: 'https://khanacademy.com',
    type: 'video'},
    
  { name: 'item2',
    title: 'react js tutorials',
    snippet: 'quick tips on getting started with react js, ez tutorial',
    preview: 'https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67',
    url: 'https://khanacademy.com',
    type: 'website'},

  { name: 'item3',
    title: 'react js tutorials',
  snippet: 'quick tips on getting started with react js, ez tutorial',
  preview: 'https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67',
  url: 'https://khanacademy.com',
  type: 'website'},

  { name: 'item4',
  title: 'react js tutorials',
  snippet: 'quick tips on getting started with react js, ez tutorial',
  preview: 'https://i.ytimg.com/vi/4OGMB4Fhh50/maxresdefault.jpg',
  url: 'khanacademy.com',
  type: 'video'},

  { name: 'item5',
  title: 'react js tutorials',
  snippet: 'https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67',
  preview: 'https://camo.githubusercontent.com/cc60f3c5a0167e8fab8efeceedc51718f10e0a60/68747470733a2f2f7261772e6769746875622e636f6d2f6e6f72697079742f7761677461696c2d72656163742d73747265616d6669656c642f6d61737465722f7761677461696c2d72656163742d73747265616d6669656c642d73637265656e73686f742d312e706e67',
  url: 'https://khanacademy.com',
  type: 'website'},
];
 
// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  if (el.type === 'video') {
    return (
      <MediaCard data={el}/>
    );
  }

  else {
    return (
      <WebsiteCard data={el} />
    );
  }
  
});
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
class HorizScroll extends Component {
  state = {
    selected: 'item0'
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }

  
  render() {
    const linkData = this.props.list;
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(linkData, selected);
 
    return (
      <div className="HorizScroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default (HorizScroll);