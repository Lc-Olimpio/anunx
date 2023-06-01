import {
  Typography,
  Card as CardMUI,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material';

const Card = ({image, title, subtitle, action }) => {
  return(
    <CardMUI sx={{ maxWidth: 345 , margin:'0 auto'}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="alt"
          title={title}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {subtitle}
        </Typography>
      </CardContent>
      {
        action
          ? (
            <CardActions>
              {action}
            </CardActions>
          ) : null
      }
    </CardMUI>        
  )
}

export default Card