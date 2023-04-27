import {
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material';

import theme from '../../src/theme';
import TemplateDefault from '../../src/templates/Default'

export default function Home() {
  return (
   <TemplateDefault>
    <Container maxWidth='sm' sx={{padding:theme.spacing(8,0,6)}}>
      <Typography 
        variant='h2' 
        component='h1' 
        align='center' 
        fontWeight='300' 
        color={theme.palette.primary.main}
        > 
        Meus Anúncios
      </Typography>
      <Button 
        variant='contained' 
        sx={{display:'block', margin:'2em auto'}}>
        Publicar novo anúncio
      </Button>
    </Container>
    <Container maxWidth='md'>
      <Grid container spacing={3} columns={{xs:4 ,sm:12 ,md:12}}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 , margin:'0 auto'}} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image='https://picsum.photos/200'
                alt="alt"
                title='Título'
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Produto 1
              </Typography>
              <Typography variant="body2" color="text.primary">
                R$ 120,00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Editar
              </Button>
              <Button size="small" color="primary">
                Remover
              </Button>
            </CardActions>
          </Card>        
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 , margin:'0 auto'}} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image='https://picsum.photos/200'
                alt="alt"
                title='Título'
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Produto 1
              </Typography>
              <Typography variant="body2" color="text.primary">
                R$ 120,00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Editar
              </Button>
              <Button size="small" color="primary">
                Remover
              </Button>
            </CardActions>
          </Card>        
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 , margin:'0 auto'}} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image='https://picsum.photos/200'
                alt="alt"
                title='Título'
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Produto 1
              </Typography>
              <Typography variant="body2" color="text.primary">
                R$ 120,00
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Editar
              </Button>
              <Button size="small" color="primary">
                Remover
              </Button>
            </CardActions>
          </Card>        
        </Grid>
      </Grid>
    </Container>
   </TemplateDefault>
  );
}
