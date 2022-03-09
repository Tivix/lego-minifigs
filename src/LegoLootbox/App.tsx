import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ChooseMinifigs from './components/ChooseMinifigs/ChooseMinifigs';
import Summary from './components/Summary/Summary';
import themeDark from './theming/darkTheme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const RenderRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/chooseMinifig" element={<ChooseMinifigs />} />
    <Route path="/summary" element={<Summary />} />
    <Route path="/" element={<Navigate to="/home" />} />
  </Routes>
);

// @todo: update colors palette and add light theme

const App = () => {
  const [isDarkModeActive, setIsDarkModeActive] = React.useState<boolean>(true);

  return (
    <ThemeProvider theme={themeDark}>
      <QueryClientProvider client={queryClient}>
        <Navbar isDarkModeActive={isDarkModeActive} setIsDarkModeActive={setIsDarkModeActive} />
        <CssBaseline />
        <RenderRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
