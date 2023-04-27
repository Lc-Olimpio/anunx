import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material'

import theme from '../../src/theme'
import TemplateDefault from '../../src/templates/Default'


const Publish = () => {

  
  
  return(
    <TemplateDefault>
      <Container maxWidth='sm' sx={{padding:theme.spacing(8,0,6)}}> 
        <Typography 
        variant='h2' 
        component='h1'
        textAlign='center'
        fontWeight='300'
        color={theme.palette.primary.main}
        >
        Publicar Anúncio
        </Typography>
        <Typography
        variant='subtitle1'
        textAlign='center'
        fontSize='1.5em'
        color={theme.palette.primary.main}
        >
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth='md'>
        <Box padding={theme.spacing(3)} bgcolor={theme.palette.background.white} boxShadow={4}>
          <Typography 
            variant='h6' 
            component='h6'
            color={theme.palette.primary.main}
            >
            Título do anúncio
          </Typography>
          <TextField 
            variant='standard'
            label='ex: Bicicleta aro 18 com garantia'
            size='small'
            fullWidth
            margin='dense'
          />
          <Typography 
            variant='h6' 
            component='h6'
            color={theme.palette.primary.main}
            marginTop={1}
          >
            Categoria
          </Typography>
          <TextField 
            variant='standard'
            label='Selecione'
            size='small'
            select
            defaultValue='Selecione'
            fullWidth
            >
              <MenuItem key='' value=''>
                Selecione
              </MenuItem>
              <MenuItem key='' value='1'>
                Bebê e Criança
              </MenuItem>
              <MenuItem key='' value='2'>
                Agricultura
              </MenuItem>
              <MenuItem key='' value='3'>
                Moda
              </MenuItem>
              <MenuItem key='' value='4'>
                Carros, Motos e Barcos
              </MenuItem>
              <MenuItem key='' value='5'>
                Serviços
              </MenuItem>
              <MenuItem key='' value='6'>
                Lazer
              </MenuItem>
              <MenuItem key='' value='7'>
                Animais
              </MenuItem>
              <MenuItem key='' value='8'>
                Moveis, Casa e Jardim
              </MenuItem>
              <MenuItem key='' value='9'>
                Imóveis
              </MenuItem>
              <MenuItem key='' value='10'>
                Equipamentos e Ferramentas
              </MenuItem>
              <MenuItem key='' value='11'>
                Celulares e Tablets
              </MenuItem>
              <MenuItem key='' value='12'>
                Esportes            
              </MenuItem>
              <MenuItem key='' value='13'>
                Tecnologia
              </MenuItem>
              <MenuItem key='' value='14'>
                Emprego
              </MenuItem>
              <MenuItem key='' value='15'>
                Outros
              </MenuItem>
          </TextField>         
        </Box>
      </Container>

      <Container maxWidth='md' sx={{marginTop:theme.spacing(3)}}>
        <Box padding={theme.spacing(3)} bgcolor={theme.palette.background.white} boxShadow={4}>
        <Typography 
            variant='h6' 
            component='h6'
            color={theme.palette.primary.main}
          >
            Imagem
          </Typography>
          <Typography 
            component='div'
            variant='body2' 
            color={theme.palette.primary.main}
          >
            A primeira imagem é a foto principal do anúncio
          </Typography>
        </Box>
      </Container>

      <Container maxWidth='md' sx={{marginTop:theme.spacing(3)}}>
        <Box padding={theme.spacing(3)} bgcolor={theme.palette.background.white} boxShadow={4}>
          <Typography 
              variant='h6' 
              component='h6'
              color={theme.palette.primary.main}
            >
              Descrição
            </Typography>
            <Typography 
              component='div'
              variant='body2' 
              color={theme.palette.primary.main}
            >
              Escreva os detalhes do que esta vendendo
            </Typography>
            <TextField 
              multiline
              rows={6}
              variant='outlined'
              fullWidth
            />
        </Box>
      </Container>

      <Container maxWidth='md' sx={{marginTop:theme.spacing(3)}}>
        <Box padding={theme.spacing(3)} bgcolor={theme.palette.background.white} boxShadow={4}>
          <Typography 
              variant='h6' 
              component='h6'
              color={theme.palette.primary.main}
            >
              Dados de contato
          </Typography>
          <TextField 
            label='Nome'
            variant='outlined'
            size='small'
            fullWidth
            margin='normal'
          />          
          <TextField 
            label='E-mail'
            variant='outlined'
            size='small'
            fullWidth
            margin='normal'
          />          
          <TextField 
            label='Telefone'
            variant='outlined'
            size='small'
            fullWidth
            margin='normal'
          />          
        
        </Box>
      </Container>
      <Container maxWidth='md' sx={{marginTop:theme.spacing(3)}}>
        <Box textAlign='end'>
          <Button
            variant='contained'
            sx={{display: 'box', }}
            
          >
            Publicar Anuncio
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish
