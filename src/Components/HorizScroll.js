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
    snippet: 'https://cdn2.techadvisor.co.uk/cmsdata/features/3511087/how-to-fix-youtube-videos-that-wont-play_thumb800.jpg',
    preview: 'goo',
    type: 'video'},
    
  { name: 'item2',
    title: 'react js tutorials',
    snippet: 'quick tips on getting started with react js, ez tutorial',
    preview: 'https://cdn2.techadvisor.co.uk/cmsdata/features/3511087/how-to-fix-youtube-videos-that-wont-play_thumb800.jpg',
    type: 'video'},

  { name: 'item3',
    title: 'react js tutorials',
  snippet: 'quick tips on getting started with react js, ez tutorial',
  preview: 'goo',
  type: 'website'},
  { name: 'item4',
  title: 'react js tutorials',
  snippet: 'quick tips on getting started with react js, ez tutorial',
  preview: 'https://cdn2.techadvisor.co.uk/cmsdata/features/3511087/how-to-fix-youtube-videos-that-wont-play_thumb800.jpg',
  type: 'video'},

  { name: 'item5',
  title: 'react js tutorials',
  snippet: 'quick tips on getting started with react js, ez tutorial',
  preview: 'goo',
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