import { 
Paper,
Container,
IconButton,
InputBase,
Typography, 
Grid,
Card,
CardMedia,
CardActions,
CardActionArea,
CardContent,
Button,

} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';

import theme from "../src/theme";
import TemplateDefault from "../src/templates/Default"

const Home = () => {
  
  return(
    <TemplateDefault>

      <Container maxWidth='md' sx={{padding:theme.spacing(8, 10, 6) }}>
        <Typography
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        marginBottom='0.5em'
        >
          O que deseja encontar?
        </Typography>
        <Paper sx= {{display: 'flex', padding: theme.spacing(0,4), width:'90%', margin:'auto' }}>
          <InputBase 
          placeholder="Ex: Iphone 12 com garantia"
          fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth="lg">
        <Typography
        component="h2"
        variant="h4"
        textAlign="center"
        marginBottom='0.5em'
        >
          Destaques
        </Typography>
        <Grid container spacing={3} columns={{xs:4 ,sm:12 ,md:12}}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345}} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="125"
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
            </Card>        
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345}} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="125"
                  image='https://picsum.photos/200'
                  alt="alt"
                  title='Título'
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Produto 2
                </Typography>
                <Typography variant="body2" color="text.primary">
                  R$ 100,00
                </Typography>
              </CardContent>               
            </Card>        
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="125"
                  image='https://picsum.photos/200'
                  alt="alt"
                  title='Título'
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Produto 3
                </Typography>
                <Typography variant="body2" color="text.primary">
                  R$ 50,00
                </Typography>
              </CardContent>               
            </Card>        
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home