import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Main from 'components/pages/Main/Main';
import { Provider } from 'react-redux';
import { store } from 'store';

import { themeOptions } from 'styles/themeOptions';

export const theme = createMuiTheme(themeOptions);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Main />
      </Provider>
    </ThemeProvider>
  );
};
