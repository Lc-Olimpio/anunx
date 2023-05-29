import { Container, Grid, Typography } from "@mui/material"
import Link from  "next/link"
import theme from "../theme"

const Footer = () => {

  const linkstyle = {
    textDecoration:'none'
  }

  return (
    <Container maxWidth="lg" component="footer" >
      <Grid container  
      sx={{
        borderTop:`1px solid ${theme.palette.divider}`,
        paddingTop: theme.spacing(3),
        paddingBottom:theme.spacing(3),
        textAlign:'center',
      }}>
        <Grid item xs={6} sm={3} marginBottom='1em'>
          <Link href='#' style={linkstyle}>
            <Typography color="textSecondary" variant="subtitle1"> Ajuda e contato</Typography> 
          </Link>
        </Grid>
        <Grid item xs={6} sm={3} marginBottom='1em'>
          <Link href='#' style={linkstyle}>
            <Typography color="textSecondary" variant="subtitle1"> Dicas e segurança  </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3} marginBottom='1em'>
          <Link href='#' style={linkstyle}>
            <Typography color="textSecondary" variant="subtitle1"> Anunciar e vender  </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={3} marginBottom='1em'>
          <Link href='#' style={linkstyle}>
            <Typography color="textSecondary" variant="subtitle1"> Plano profissional </Typography> 
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer