import styled from "@emotion/styled"
import { Box } from "@mui/material"

import theme from "../../theme"

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

const dropZoneError = ({
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  width: 175 , 
  height: 150,    
  backgroundColor:theme.palette.background.default,
  border: '2px dashed red',
  margin: '0 0.6em 0.2em 0',
  padding: '0.5em'
})

export {
  mask,
  ImgBox,
  dropZone,
  dropZoneError,
}