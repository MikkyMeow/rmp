import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Main from 'components/pages/Main/Main';

import { themeOptions } from 'styles/themeOptions';

export const theme = createMuiTheme(themeOptions);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
};
