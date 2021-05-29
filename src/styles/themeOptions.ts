export const themeOptions = {
  palette: {
    primary: {
      light: '#825396',
      main: '#3c3c3c',
      dark: '#28003d',
    },
    secondary: {
      light: '#deccdb',
      main: '#deccdb',
      dark: '#ac9ba9',
    },
    error: {
      main: '#EB7070',
    },
    warning: {
      main: '#EBD070',
    },
    logo: {
      main: '#566385',
    },
    success: {
      main: '#499C47',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
      disabled: '#5B7082',
    },
    link: {
      default: '#6A93D1',
      hover: '#5A7EB5',
      active: '#83AFF2',
      disabled: '#CFD8E8',
    },
  },
  spacing: 1,
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#542868',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    h2: {
      fontSize: 20,
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
      fontWeight: 400,
    },
    h4: {
      fontSize: 18,
      fontWeight: 700,
    },
    h5: {
      fontSize: 18,
      fontWeight: 400,
      color: '#5B7082',
    },
  },
};
