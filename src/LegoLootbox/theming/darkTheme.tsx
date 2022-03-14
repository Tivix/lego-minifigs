import { createTheme } from '@mui/material/styles';
import darkBackgroundImage from '../assets/img/backgroud-dark.jpeg';

const breakpoints = {
  values: {
    xs: 0,
    sm: 0, // Phone
    md: 768, // Tablet/Laptop
    lg: 1500, // Desktop
    xl: 2000,
  },
};

const themeDark = createTheme({
  palette: {
    primary: {
      main: '#2f4f4f',
    },
    secondary: {
      main: '#800080',
    },
    text: {
      primary: '#fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${darkBackgroundImage})`,
          backgroundSize: 'cover',
          transition: '1s',
          height: '100%',
        },
      },
    },
  },
  breakpoints,
  typography: {
    h4: {
      fontSize: '2rem',
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: '0.6785rem',
      },
    },
  },
});

export default themeDark;
