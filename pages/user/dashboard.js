import {
  Button,
  Typography,
  Container,
  Grid,
} from '@mui/material';

import theme from '../../src/theme';
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card';

export default function Home() {
  return (
   <TemplateDefault>
    <Container maxWidth='sm'>
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
          <Card 
            image='https://picsum.photos/720'
            title='produto x'
            subtitle='price'
            action={
              <>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            image='https://picsum.photos/720'
            title='produto x'
            subtitle='price'
            action={
              <>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card 
            image='https://picsum.photos/720'
            title='produto x'
            subtitle='price'
            action={
              <>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </>
            }
          />
        </Grid>
      </Grid>
    </Container>
   </TemplateDefault>
  );
}
