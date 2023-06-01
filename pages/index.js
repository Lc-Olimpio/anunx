import { 
Paper,
Container,
IconButton,
InputBase,
Typography, 
Grid,
} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';

import theme from "../src/theme";
import TemplateDefault from "../src/templates/Default"
import Card from "../src/components/Card";

const Home = () => {
  
  return(
    <TemplateDefault>

      <Container maxWidth='md'>
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
        margin= {theme.spacing(3,0,3)}
        >
          Destaques
        </Typography>
        <Grid container spacing={3} columns={{xs:4 ,sm:12 ,md:12}}>
          <Grid item xs={12} sm={6} md={4}>
          <Card 
            image='https://picsum.photos/200'
            title='produto x'
            subtitle='price'
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card 
            image='https://picsum.photos/200'
            title='produto x'
            subtitle='price'
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card 
            image='https://picsum.photos/200'
            title='produto x'
            subtitle='price'
          />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home