import { useDropzone } from 'react-dropzone'

import {
  Box,
  IconButton,
  Typography,
} from '@mui/material'


import { DeleteForever } from '@mui/icons-material'

import {
  mask,
  ImgBox,
  dropZone,
  dropZoneError,
} from './styles'

const FileUpload = ({files, errors, touched, setFieldValue}) => {

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })
      setFieldValue ('files',[
        ...files,
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = fileName => {
    const newFileState = files.filter(file => file.name !== fileName)
    setFieldValue('files',newFileState)
  }

  return (
    <>
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
      {
        errors && touched
        ? <Typography variant='body2' color='error'>{errors}</Typography>
        : null 
      }
      <Box sx={{
        display:'flex',  
        marginTop:'1em', 
        flexWrap:'wrap', 
        }}>

        <Box sx={errors && touched? dropZoneError:dropZone}  {...getRootProps()}>
          <input name='files' {...getInputProps()} />

          <Typography
          component='span'
          variant='body2'
          color={errors && touched? 'error':'textPrimary'}
          textAlign='center'
          >
            Clique para adicionar ou arraste a imagem aqui.
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
    </>
  )
}

export default FileUpload