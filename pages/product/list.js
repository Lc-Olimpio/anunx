import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';

import TemplateDefault from "../../src/templates/Default"
import Card from "../../src/components/Card"
import theme from "../../src/theme";

const List = ()=> {

  return(
    <TemplateDefault>
      <Container maxWidth='lg' sx={{marginBottom:theme.spacing(2)}}>

        <Grid container spacing={3 }>
          <Grid item xs={12}>
            <Paper sx={{
              display: 'flex',
              padding: theme.spacing(0,4),
              width:'100%'
              }}>
              <InputBase 
              placeholder="Ex: Iphone 12 com garantia"
              fullWidth
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ 
              backgroundColor:theme.palette.background.contrast,
              padding:theme.spacing(3),
              marginBottom:theme.spacing(3)
              }}>
              <Typography component='h6' variant="h6" >
                Anúncios
              </Typography>
              <Typography component='span' variant="subtitle2" display='block' marginBottom={theme.spacing(1)}>
                ENCONTRADOS 200 ANÚNCIOS
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card 
                  image='https://picsum.photos/720?a=0'
                  title='produto x'
                  subtitle='price'
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card 
                  image='https://picsum.photos/720?a=1'
                  title='produto x'
                  subtitle='price'
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card 
                  image='https://picsum.photos/720?a=2'
                  title='produto x'
                  subtitle='price'
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>     
    </TemplateDefault>
  )
}

export default List