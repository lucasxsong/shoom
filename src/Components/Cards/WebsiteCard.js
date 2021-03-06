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

import MaterialIcon, {colorPalette} from 'material-icons-react';


const styles = {
  card: {
    maxWidth: 250,
    //height: 250,
    margin: 5,
    whiteSpace: 'pre-wrap',
    size: 5,
    background: '#ffffff',
  },
  media: {
   height: 120,
  },
};


function WebsiteCard(props) {
  const { classes, data } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
      
        <CardContent>
          <Typography gutterTop variant="h6" component="h7">
            {data.title.toString()}
          </Typography>
          <Typography variant= "h7" component="h7">
            {data.snippet.toString()}
          </Typography>
        </CardContent>
        
        <a href = {data.formattedUrl.toString()} target = "_blank">
        {
            data.pagemap.cse_image && (
                <CardMedia
                    component = 'img'
                    Height = '80%'
                    maxWidth = '200'
                    className={classes.media}
                    image={ data.pagemap.cse_image[0].src}
                    title={data.title.toString()}
                    />
            )
        } 
        </a>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <MaterialIcon icon="bookmark" />
        </Button>
        <Button size="small" color="primary">
        <MaterialIcon icon="thumb_up" />
        </Button>
        <Button size="small" color="primary">
        <MaterialIcon icon="thumb_down" />
        </Button>
      </CardActions>
    </Card>
  );
}

WebsiteCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebsiteCard);

