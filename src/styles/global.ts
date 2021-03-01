import { makeStyles } from '@material-ui/core';

export const globalStyles = makeStyles({
  '@global': {
    body: {
      background:
        'linear-gradient(270deg, rgba(33,0,159,1) 0%, rgba(119,5,5,1) 100%)',
      width: '100vw',
      height: '100vh',
      margin: 0,
      color: 'white',
    },
  },
});
