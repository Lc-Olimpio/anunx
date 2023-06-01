import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography 
} from "@mui/material"

import Carousel from "react-material-ui-carousel"

import TemplateDefault from "../src/templates/Default"
import theme from "../src/theme"

const Product = () => {

  const boxStyle = {
    backgroundColor:theme.palette.background.contrast,
    padding:theme.spacing(2),
    margin:theme.spacing(2,0)
  }

  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={8} >             
            <Box sx={boxStyle}>
              <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                animation="slide"
              >
                <Card>
                  <CardMedia 
                    component="img"
                    height="56%"  
                    image="https://picsum.photos/1920/1080?a=1"
                    alt="Titulo da foto"
                  />
                </Card>
                <Card>
                  <CardMedia 
                    component="img"
                    height="56%"  
                    image="https://picsum.photos/1920/1080?a=2"
                    alt="Titulo da foto"
                  />
                </Card>
                <Card>
                  <CardMedia 
                    component="img"
                    height="56%"  
                    image="https://picsum.photos/1920/1080?a=3"
                    alt="Titulo da foto"
                  />
                </Card>
              </Carousel>
            </Box>
            <Box sx={{
              backgroundColor:theme.palette.background.contrast,
              padding:theme.spacing(3),
              marginBottom:theme.spacing(3)
              }}>
              <Typography component='span'variant='caption'>Publicado 16 de junho de 2021</Typography>
              <Typography component='h4' variant='h4' margin='0.4em 0'>Jaguar XE 2.0 D R-Sport Aut.</Typography>
              <Typography component='h4' variant='h4' fontWeight='bold' marginBottom='0.4em'> R$ 50.000,00 </Typography>
              <Chip label='Categoria' />
            </Box>
            <Box sx={boxStyle}>
              <Typography component='h6' variant='h6'>Descrição</Typography>
              <Typography component='p' variant='body2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil tenetur veniam est, dolorem aut quaerat illo placeat, delectus eum at dolores quos architecto? Nihil minus nostrum nobis sequi placeat qui? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, a! A vel doloribus temporibus similique? Perspiciatis error nemo, laudantium quam tempora voluptas vero. Voluptatem voluptate distinctio at repellendus, perspiciatis ut.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={4}>
            <Card elevation={0} sx={boxStyle}>
              <CardHeader
                avatar={
                  <Avatar>L</Avatar>
                }
                title="Fulano de tal"
                subheader="fulano@email.com"
              />
              <CardMedia 
                image="https://picsum.photos/200"
              />
              </Card>
            <Box sx={boxStyle}>
              <Typography component='h6' variant='h6'>Localização</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
} 

export default Product