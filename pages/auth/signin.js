import { Formik } from "formik"
import * as yup from 'yup'

import { 
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography 
} from "@mui/material"

import TemplateDefault from "../../src/templates/Default"
import theme from "../../src/theme"

  const validationSchema = yup.object({
    name: yup.string().min(6,'titulo muito pequeno').required('Campo obrigatório'),
    email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
    password: yup.string().min(6,'titulo muito pequeno').required('Campo obrigatório'),
    passwordConfirmation: yup.string().min(6,'titulo muito pequeno').required('Campo obrigatório')
  })

const Signin = () => {

  const inputStyle = ({
    margin: theme.spacing(1,0)
  })

  return (
    <TemplateDefault>
      <Formik
      initialValues = {{
        name: '',
        email: '',
        password:'',
        passwordConfirmation: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('dados Enviados', values)
      }}
      >
        {
          ({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,            
          }) => {

           return (  
              <form onSubmit={handleSubmit}>
                <Container maxWidth='md'>
                <Typography
                  variant='h2'
                  component='h1'
                  textAlign='center'
                  marginTop={theme.spacing(6)}
                >
                  Crie sua conta
                </Typography>
                <Typography
                  variant='h5'
                  component='h2'
                  textAlign='center'
                  fontWeight='400'
                  marginBottom={theme.spacing(4)}
                  
                >
                  E anuncie para todo o Brasil
                </Typography>
                </Container>

                <Container maxWidth='md'>
                  <Paper elevation={0} sx={{padding:theme.spacing(2)}}>

                    <FormControl 
                      fullWidth 
                      sx={inputStyle}
                      variant="standard" 
                      error={errors.name && touched.name? true:false
                      }>
                      <InputLabel>Nome</InputLabel>
                      <Input 
                        fullWidth
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                    </FormControl>
              
                    <FormControl 
                      fullWidth 
                      sx={inputStyle}
                      variant="standard" 
                      error={errors.name && touched.name? true:false
                      }>
                      <InputLabel>E-mail</InputLabel>
                      <Input 
                        fullWidth
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </FormControl>
                
                    <FormControl 
                      fullWidth 
                      sx={inputStyle}
                      variant="standard" 
                      error={errors.name && touched.name? true:false
                      }>
                      <InputLabel>Senha</InputLabel>
                      <Input 
                        fullWidth
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </FormControl>
                
                    <FormControl 
                      fullWidth 
                      sx={inputStyle}
                      variant="standard" 
                      error={errors.name && touched.name? true:false
                      }>
                      <InputLabel>Confirmação de senha</InputLabel>
                      <Input 
                        fullWidth
                        name="passwordConfirmation"
                        value={values.passwordConfirmation}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <Button
                      sx={{margin: theme.spacing(4)}}
                      type="submit"
                      variant="contained"
                      fullWidth
                    > 
                      Cadastrar 
                    </Button>
                    <Typography></Typography>
                  </Paper>
                </Container>

              </form>
            )
          }
        }
      </Formik>
    </TemplateDefault>   
  )
}

export default Signin