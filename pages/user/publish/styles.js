import theme from '../../../src/theme'

const containerStyle = ({  
  marginTop: theme.spacing(3),
})

const boxStyle = ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.contrast,
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);',
})

export {
  containerStyle,
  boxStyle,
}