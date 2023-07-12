import { Formik } from 'formik'

import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Typography,
  FormHelperText,
  Select,
  Input,
} from '@mui/material'

import { 
  containerStyle,
  boxStyle,
} from './styles'

import theme from '../../../src/theme'
import TemplateDefault from '../../../src/templates/Default'
import FileUpload from '../../../src/components/fileUpload/Index'

const Publish = () => {

  return(
    <TemplateDefault>
      <Formik
      initialValues={formValues.initialValues}
      validationSchema={formValues.validationSchema}
      onSubmit={(values)=> {
        console.log('form enviado', values)
      }}
      >
        {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {

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
                    <FormControl fullWidth variant='standard' error={errors.title && touched.title? true:false}>
                      <InputLabel>ex.: Bicicleta aro 18 com garantia</InputLabel>
                      <Input
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                      />
                      <FormHelperText sx={{marginLeft:'0'}} >
                        {errors.title && touched.title? errors.title:null}
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
                      <FormControl fullWidth variant='standard' error={errors.category && touched.category? true:false}>
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
                          {errors.category && touched.category? errors.category:null}
                        </FormHelperText>
                      </FormControl>  

                  </Box>
                </Container>

                <Container maxWidth='md' sx={containerStyle}>
                  <Box sx={boxStyle}>
                    <FileUpload 
                      files={values.files} 
                      errors={errors.files} 
                      touched={touched.files}
                      setFieldValue={setFieldValue}
                      />
                  </Box>
                </Container>

                <Container maxWidth='md' sx={containerStyle}>
                  <Box sx={boxStyle}>
                  <Typography 
                      variant='h6' 
                      component='h6'
                      color='textPrimary'
                      marginBottom={'0.3em'}
                      >
                      Descrição
                    </Typography>
                      <FormControl fullWidth variant='outlined' error={errors.description && touched.description? true:false}>
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
                          {errors.description && touched.description? errors.description:null}
                        </FormHelperText>
                      </FormControl>
                  </Box>
                </Container>

                <Container maxWidth = 'md' sx={containerStyle}>
                  <Box sx={boxStyle}>
                    <Typography
                    variant='h6' 
                    component='h6'
                    color='textPrimary'
                    marginBottom='0.3em'
                    >
                      Preço
                    </Typography>
                    <FormControl fullWidth error={errors.price && touched.price? true:false} >
                      <OutlinedInput 
                      name='price'
                      value={values.price}
                      onChange={handleChange}
                      startAdornment= {<InputAdornment position='start'>$</InputAdornment>}
                      />
                      <FormHelperText sx={{marginLeft:'0'}} >
                          {errors.price && touched.price? errors.price:null}
                        </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth = 'md' sx={containerStyle}>
                  <Box sx={boxStyle}>
                    <Typography 
                        variant='h6' 
                        component='h6'
                        color='textPrimary'
                      >
                        Dados de contato
                    </Typography>
                    <FormControl fullWidth variant='standard' error={errors.name && touched.name? true:false}>
                      <InputLabel>Nome</InputLabel>
                      <Input 
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        size='small'
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.name && touched.name? errors.name:null}
                      </FormHelperText>          
                    </FormControl>

                    <FormControl fullWidth variant='standard' error={errors.email && touched.email? true:false}>
                      <InputLabel>E-mail</InputLabel>
                      <Input
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        size='small'
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.email && touched.email? errors.email:null}
                      </FormHelperText>          
                    </FormControl>

                    <FormControl fullWidth variant='standard' error={errors.phone && touched.phone? true:false}>
                      <InputLabel>Telefone</InputLabel>
                      <Input
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                        size='small'
                        fullWidth
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone? errors.phone:null}
                      </FormHelperText>          
                    </FormControl>      
                  
                  </Box>
                </Container>
                <Container maxWidth='md' sx={containerStyle}>
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
