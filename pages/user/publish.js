import { Formik } from 'formik'
import * as yup from 'yup'

import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
  FormHelperText,
  Select,
  Input,
} from '@mui/material'
import { useDropzone } from 'react-dropzone'
import styled from '@emotion/styled'

import theme from '../../src/theme'
import TemplateDefault from '../../src/templates/Default'
import { useState } from 'react'



const Publish = () => {
  
  const [files, setFiles] = useState([])

  const validationSchema = yup.object({
    title: yup.string().min(6, `Título muito pequeno`).max(100, `Título muito grande.`).required('Campo obrigatório'),
    category: yup.string().required('Campo obrigatório'),
    description: yup.string().min(50, 'Escreva uma descrição com pelo menos 50 caracteres.').required('Campo obrigatório'),
    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.string().required('Campo obrigatório'),
  })

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
      <Formik
      initialValues={{
        title: '',
        category:'',
        description:'',
        price:'',
        name:'',
        email:'',
        phone:'',
      }}
      validationSchema={validationSchema}
      onSubmit={(values)=> {
        console.log('form enviado', values)
      }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => {
            console.log(errors)
            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth='sm'> 
                  <Typography 
                  variant='h2' 
                  component='h1'
                  textAlign='center'
                  fontWeight='300'
                  color='textPrimary'
                  >
                  Publicar Anúncio
                  </Typography>
                  <Typography
                  variant='subtitle1'
                  textAlign='center'
                  fontSize='1.5em'
                  color='textPrimary'
                  marginBottom={theme.spacing(3)}
                  >
                    Quanto mais detalhado, melhor!
                  </Typography>
                </Container>

                <Container maxWidth='md'>
                  <Box sx={boxStyle}>

                    <Typography 
                      variant='h6' 
                      component='h6'
                      color='textPrimary'
                      >
                      Título do anúncio
                    </Typography>
                    <FormControl fullWidth variant='standard' error={errors.title? true:false}>
                      <InputLabel>ex.: Bicicleta aro 18 com garantia</InputLabel>
                      <Input
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                      />
                      <FormHelperText sx={{marginLeft:'0'}} >
                        {errors.title}
                      </FormHelperText>
                    </FormControl>

                    <Typography 
                      variant='h6' 
                      component='h6'
                      color='textPrimary'
                      marginTop={1}
                      >
                      Categoria
                    </Typography>
                      <FormControl fullWidth variant='standard' error={errors.category? true:false}>
                        <InputLabel sx={{padding:'0'}}>Selecione</InputLabel>
                        <Select
                          label="Selecione"
                          fullWidth
                          name='category'
                          value={values.category}
                          onChange={handleChange}
                          >
                          
                          <MenuItem value='Bebê e Criança'>Bebê e Criança</MenuItem>
                          <MenuItem value='Agricultura'>Agricultura</MenuItem>
                          <MenuItem value='Moda'>Moda</MenuItem>
                          <MenuItem value='Carros, Motos e Barcos'>Carros, Motos e Barcos</MenuItem>
                          <MenuItem value='Serviços'> Serviços </MenuItem>
                          <MenuItem value='Lazer'> Lazer </MenuItem>
                          <MenuItem value='Animais'> Animais </MenuItem>
                          <MenuItem value='Moveis, Casa e Jardim'> Moveis, Casa e Jardim </MenuItem>
                          <MenuItem value='Imóveis'> Imóveis </MenuItem>
                          <MenuItem value='Equipamentos e Ferramentas'> Equipamentos e Ferramentas </MenuItem>
                          <MenuItem value='Celulares e Tablets'> Celulares e Tablets </MenuItem>
                          <MenuItem value='Esportes'> Esportes </MenuItem>
                          <MenuItem value='Tecnologia'> Tecnologia </MenuItem>
                          <MenuItem value='Emprego'> Emprego </MenuItem>
                          <MenuItem value='Outros'> Outros </MenuItem>
                        </Select>
                        <FormHelperText sx={{marginLeft:'0'}} >
                          {errors.category}
                        </FormHelperText>
                      </FormControl>  

                  </Box>
                </Container>

                <Container maxWidth='md' sx={ContainerStyle}>
              
                  <Box sx={boxStyle}>
                    <Typography 
                      variant='h6' 
                      component='h6'
                      color='textPrimary'
                      >
                      Imagem
                    </Typography>
                    <Typography 
                      component='div'
                      variant='body2' 
                      color='textPrimary'
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
                        color='textPrimary'
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
                      color='textPrimary'
                      marginBottom={'0.3em'}
                      >
                      Descrição
                    </Typography>
                      <FormControl fullWidth variant='outlined' error={errors.description? true:false}>
                        <InputLabel>Escreva os detalhes do que esta vendendo</InputLabel>
                        <OutlinedInput
                          name='description' 
                          multiline
                          rows={6}
                          value={values.description}
                          onChange={handleChange}
                          label='Escreva os detalhes do que esta vendendo'
                        />
                        <FormHelperText sx={{marginLeft:'0'}} >
                          {errors.description}
                        </FormHelperText>
                      </FormControl>
                  </Box>
                </Container>

                <Container maxWidth = 'md' sx={ContainerStyle}>
                  <Box sx={boxStyle}>
                    <Typography
                    variant='h6' 
                    component='h6'
                    color='textPrimary'
                    marginBottom='0.3em'
                    >
                      Preço
                    </Typography>
                    <FormControl fullWidth error={errors.price? true:false} >
                      <OutlinedInput 
                      name='price'
                      value={values.price}
                      onChange={handleChange}
                      startAdornment= {<InputAdornment position='start'>$</InputAdornment>}
                      />
                      <FormHelperText sx={{marginLeft:'0'}} >
                          {errors.price}
                        </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth = 'md' sx={ContainerStyle}>
                  <Box sx={boxStyle}>
                    <Typography 
                        variant='h6' 
                        component='h6'
                        color='textPrimary'
                      >
                        Dados de contato
                    </Typography>
                    <FormControl fullWidth variant='standard' error={errors.name? true:false}>
                      <InputLabel>Nome</InputLabel>
                      <Input 
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        size='small'
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.name}
                      </FormHelperText>          
                    </FormControl>

                    <FormControl fullWidth variant='standard' error={errors.email? true:false}>
                      <InputLabel>E-mail</InputLabel>
                      <Input
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        size='small'
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.email}
                      </FormHelperText>          
                    </FormControl>

                    <FormControl fullWidth variant='standard' error={errors.phone? true:false}>
                      <InputLabel>Telefone</InputLabel>
                      <Input
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                        size='small'
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.phone}
                      </FormHelperText>          
                    </FormControl>      
                  
                  </Box>
                </Container>
                <Container maxWidth='md' sx={ContainerStyle}>
                  <Box textAlign='end'>
                    <Button
                      sx={{display: 'box', }}
                      variant='contained'
                      type='submit'
                    >
                      Publicar Anúncio
                    </Button>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>
      
    </TemplateDefault>
  )
}

export default Publish
