import * as yup from 'yup'

const initialValues = {
  title: '',
  category:'',
  description:'',
  price:'',
  name:'',
  email:'',
  phone:'',
  files:[],
}

const validationSchema = yup.object({
  title: yup.string().min(6, `Título muito pequeno`).max(100, `Título muito grande.`).required('Campo obrigatório'),
  category: yup.string().required('Campo obrigatório'),
  description: yup.string().min(50, 'Escreva uma descrição com pelo menos 50 caracteres.').required('Campo obrigatório'),
  price: yup.number().required('Campo obrigatório'),
  email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  files: yup.array().min(1,'Envie pelo menos uma imagem').required('Campo obrigatório')
})

export {
  initialValues,
  validationSchema
}