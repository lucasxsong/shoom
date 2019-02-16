import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './HorizScroll.css';
import { withStyles } from '@material-ui/core';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import RenderCard from './Cards/RenderCard.js'
 
// list of items
//json pkg
const list = [
  { title: 'react js video post',
  type: 'video',
   snippet: 'quick tips on getting started with react js, ez tutorial',
   preview: 'https://learn.g2crowd.com/hs-fs/hubfs/Pillar%20Pages/screenshots/mac%20screenshots/name-screenshot-on-mac-preview.png?width=2564&name=name-screenshot-on-mac-preview.png',
  link: 'reactjs.org',  
  cacheID: '89nbig8'},

  { title: 'react js forum post',
  type: 'forum',
   snippet: 'quick tips on getting started with react js, ez tutorial',
   preview: 'https://learn.g2crowd.com/hs-fs/hubfs/Pillar%20Pages/screenshots/mac%20screenshots/name-screenshot-on-mac-preview.png?width=2564&name=name-screenshot-on-mac-preview.png',
  link: 'reactjs.org',  
  cacheID: '89nbig8'},
  
  { title: 'react js video',
  type: 'video',
  snippet: 'quick tips on getting started with react js, ez tutorial',
  preview: 'https://learn.g2crowd.com/hs-fs/hubfs/Pillar%20Pages/screenshots/mac%20screenshots/name-screenshot-on-mac-preview.png?width=2564&name=name-screenshot-on-mac-preview.png',
 link: 'reactjs.org',  
 cacheID: '89nbig8'},
  
 { title: 'react js forum post',
 type: 'forum',
 snippet: 'quick tips on getting started with react js, ez tutorial',
 preview: 'https://learn.g2crowd.com/hs-fs/hubfs/Pillar%20Pages/screenshots/mac%20screenshots/name-screenshot-on-mac-preview.png?width=2564&name=name-screenshot-on-mac-preview.png',
link: 'reactjs.org',  
cacheID: '89nbig8'},
 
{ title: 'react js documentation',
type: 'doc',
snippet: 'quick tips on getting started with react js, ez tutorial',
preview: 'https://learn.g2crowd.com/hs-fs/hubfs/Pillar%20Pages/screenshots/mac%20screenshots/name-screenshot-on-mac-preview.png?width=2564&name=name-screenshot-on-mac-preview.png',
link: 'reactjs.org',  
cacheID: '89nbig8'},
];
 
// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <RenderCard/>
  );
};
 
// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;
  if ()
  return (
    <MenuItem
      text={name}
      key={name}
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