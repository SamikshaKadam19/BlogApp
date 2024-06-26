// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import store from './redux/store';
import BlogList from './Components/BlogList';
import ThemeSwitcher from './Components/ThemeSwitcher';

const App = () => {
  const themeMode = useSelector((state) => state.theme);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeSwitcher />
      <BlogList />
    </ThemeProvider>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
