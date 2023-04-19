import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import theme, { roboto } from '../src/theme';


export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{color:theme.palette.primary.main}}> 
          Material UI - Next.js example
        </Typography>        
        
      </Box>
    </Container>
  );
}
