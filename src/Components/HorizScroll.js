import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './HorizScroll.css';
import { withStyles } from '@material-ui/core';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import WebsiteCard from './Cards/WebsiteCard.js';
import MediaCard from './Cards/MediaCard.js';
 
// list of items
const list = [
  { name: 'item1',
    title: 'react js tutorials',
   snippet: 'quick tips on getting started with react js, ez tutorial',
   preview: 'goo'},
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' },
];
 
// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <WebsiteCard
      media = {MenuItem.title}
      title = {MenuItem.title}
      desc = {MenuItem.snippet}
    />
  );
};
 
// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;
 
  return (
    <MenuItem
      text={name}
      key={name}
      title = {list.title}
      snippet = {list.snippet}
    />
  );
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
    selected: 'item1'
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }
 
  
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);
 
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