import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import React, { Component } from 'react';

import WebsiteCard from './Cards/WebsiteCard';
import MediaCard from './Cards/MediaCard';


// this function needs to instantiate different kinds of cards depending the array being passed in
export default class RenderCard extends Component {

    render(){
        // pass in your data through props
        const { cardData } = this.props

        // assuming you are getting your card data in a large json object
        // will be using cardlist to store the list of cards to be rendered 
        // under horizscroll
        let cardList = []

        // goes through array and populates cardlist with cards of corresponding type 
        Object.keys(cardData).forEach((cardIndex) => {
            let card = cardData[cardIndex]
            if (card.type === "website") {
                cardList.push (
                    <WebsiteCard 
                        className = {card.title}
                        image = {card.preview}
                        title = {card.title}
                        desc = {card.desc}
                    />
          
                )
            }

            else if (card.type === "media") {
                cardList.push(
                    <MediaCard 
                        className = {card.title}
                        title = {card.title}
                        image = {card.preview}
                        desc = {card.desc}
                    />  
                )
            }
            
        })

        return (
            
        );
    }
}