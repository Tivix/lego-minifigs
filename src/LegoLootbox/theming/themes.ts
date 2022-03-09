// const themeLight = createTheme({
//   palette: {
//     primary: {
//       main: 'rgba(0, 0, 0, 0.895)',
//     },
//     text: {
//       primary: 'rgba(0, 0, 0, 0.87)',
//     },
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           backgroundImage: `url(${lightBackgroundImage})`,
//           backgroundSize: 'cover',
//           transition: '1s',
//         },
//       },
//     },
//   },
// });

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

export {
  themeDark,
};
