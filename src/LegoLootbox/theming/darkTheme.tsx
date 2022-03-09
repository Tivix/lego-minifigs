import { createTheme } from '@mui/material/styles';
import darkBackgroundImage from '../assets/img/backgroud-dark.jpeg';

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
});

export default themeDark;
