import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';

import { AccountCircle } from '@mui/icons-material';

export default function ButtonAppBar() {
  const [anchorUserMenu, setAnchorUserMenu] = useState()
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar sx={{padding:'0'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href={"/"}  style={{color:'white', textDecoration:'none'}}>Anunx</Link>
            </Typography>
            <Link href={"/user/publish"} passHref style={{color:'white', textDecoration:'none'}}>
              <Button color="inherit" variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>
            <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                ? <Avatar src="" /> 
                : <AccountCircle />
              }

              <Typography 
              variant='subtitle2'
              color='secondary'
              marginLeft='0.2em'
              >
                Nome do Usuário
              </Typography>
            </IconButton>
            <Menu
            open={openUserMenu}
            anchorEl={anchorUserMenu}
            onClose={() => setAnchorUserMenu(null)}
            >
              <Link href='/user/dashboard' passHref style={{color:'black', textDecoration:'none'}}>
                <MenuItem>Ver anúncios</MenuItem>
              </Link>
              <Link href='/user/publish' passHref style={{color:'black', textDecoration:'none'}}>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>
              <Divider />
              <MenuItem>sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
