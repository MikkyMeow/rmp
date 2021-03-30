import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Layout } from 'components/Layout';
import React from 'react';

import { themeOptions } from 'styles/themeOptions';

export const theme = createMuiTheme(themeOptions);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
