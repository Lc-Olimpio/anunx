import { Box } from '@mui/material'
import Footer from '../components/Footer'
import Header from '../components/Header'
import theme from '../theme'

const Default = ({children}) => {
  return (
    <>
    <Header />
      <Box sx={{padding:theme.spacing(6,0,6)}}>
        {children}
      </Box>
    <Footer />
    </>
  )
}

export default Default