import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      main:'#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#0000ff',
    },
    background : {
      default: 'rgb(242, 244, 245)',
      contrast: 'rgb(255,255,255)'
    }, 
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
