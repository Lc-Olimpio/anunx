import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  TextField,
  Typography 
} from '@mui/material'

import { DeleteForever } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'
import styled from '@emotion/styled'

import theme from '../../src/theme'
import TemplateDefault from '../../src/templates/Default'
import { useState } from 'react'


const Publish = () => {

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })
      setFiles([
        ...files,
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = fileName => {
    console.log('click')
    const newFileState = files.filter(file => file.name !== fileName)
    setFiles(newFileState)
  }

  const ContainerStyle = ({  
    marginTop: theme.spacing(3),
  })

  const boxStyle = ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.contrast,
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);',
  })

  const dropZone = ({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width: 175 , 
    height: 150,    
    backgroundColor:theme.palette.background.default,
    border: '2px dashed black',
    margin: '0 0.6em 0.2em 0',
    padding: '0.5em'
  })

  const mask = ({
    display:'none',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '100%',
    color:'white'
  })
  
  const ImgBox = styled(Box, {}) ({
    width:175,
    height:150,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    margin: '0 0.6em 0.6em 0',
    position: 'relative',

    '&:hover': {
      '& .mask' : {
        display:'flex',
        cursor: 'pointer',
      }
    }
  })

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
        <Box sx={boxStyle}>
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
              select
              label="Selecione"
              defaultValue='Selecione'
              variant='standard'
              fullWidth>
          
              <MenuItem value= 'Selecione'> Selecione </MenuItem>
              <MenuItem value='Bebê e Criança'> Bebê e Criança </MenuItem>
              <MenuItem value='Agricultura'> Agricultura </MenuItem>
              <MenuItem value='Moda'> Moda </MenuItem>
              <MenuItem value='Carros, Motos e Barcos'> Carros, Motos e Barcos </MenuItem>
              <MenuItem value='Serviços'> Serviços </MenuItem>
              <MenuItem value='Lazer'> Lazer </MenuItem>
              <MenuItem value='7'> Animais </MenuItem>
              <MenuItem value='8'> Moveis, Casa e Jardim </MenuItem>
              <MenuItem value='Imóveis'> Imóveis </MenuItem>
              <MenuItem value='Equipamentos e Ferramentas'> Equipamentos e Ferramentas </MenuItem>
              <MenuItem value='Celulares e Tablets'> Celulares e Tablets </MenuItem>
              <MenuItem value='Esportes'> Esportes </MenuItem>
              <MenuItem value='Tecnologia'> Tecnologia </MenuItem>
              <MenuItem value='Emprego'> Emprego </MenuItem>
              <MenuItem value='Outros'> Outros </MenuItem>

            </TextField>      
        </Box>
      </Container>

      <Container maxWidth='md' sx={ContainerStyle}>
     
        <Box sx={boxStyle}>
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

          <Box sx={{
            display:'flex',  
            marginTop:'1em', 
            flexWrap:'wrap', 
            }}>
      
            <Box sx={dropZone} {...getRootProps()}>
              <input {...getInputProps()} />

              <Typography
              component='span'
              variant='body2'
              color={theme.palette.primary.main}
              textAlign='center'
              >
                Clique para adicionar ou arraste a imagem para aqui.
              </Typography>
            </Box>

            {
              files.map((file, index) => (
              <ImgBox key={file.name} sx={{ backgroundImage: `url(${file.preview})` }}>
                {
                  index === 0 ?
                    <Box sx={{position:'absolute', bottom:'0', padding:'6px 10px', background:'blue'}}>
                      <Typography variant='body2' color='secondary'>
                        Principal
                      </Typography>
                    </Box>
                  : null
                }
                <Box sx={mask} className='mask'> 
                  <IconButton  onClick={() => handleRemoveFile(file.name)} color='secondary' >
                  <DeleteForever fontSize='large' />
                  </IconButton>
                </Box>
              </ImgBox>
            ))
          }            
            
          </Box>
        </Box>
      </Container>

      <Container maxWidth='md' sx={ContainerStyle}>
        <Box sx={boxStyle}>
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

      <Container maxWidth = 'md' sx={ContainerStyle}>
        <Box sx={boxStyle}>
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
      <Container maxWidth='md' sx={ContainerStyle}>
        <Box textAlign='end'>
          <Button
            sx={{display: 'box', }}
            variant='contained'
          >
            Publicar Anúncio
          </Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish
