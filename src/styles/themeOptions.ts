export const themeOptions = {
  palette: {
    primary: {
      light: '#6cd2ff',
      main: '#1DA1F2',
      dark: '#0073bf',
    },
    secondary: {
      light: '#ffffff',
      main: '#274A9D',
      dark: '#000000',
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
      primary: '#000',
      secondary: '#5B7082',
      disabled: '#000',
    },
    link: {
      default: '#6A93D1',
      hover: '#5A7EB5',
      active: '#83AFF2',
      disabled: '#CFD8E8',
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        height: 40,
        borderRadius: 40,
        fontWeight: 600,
      },
      containedPrimary: {
        backgroundColor: '#1DA1F2',
        color: '#ffffff',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
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
