import { Box, makeStyles } from '@material-ui/core';
import { Controls } from 'components/elements/Controls/Controls';
import { Playlist } from 'components/elements/Playlist/Playlist';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#181818',
    position: 'relative',
    maxWidth: 1440,
    height: '100vh',
    margin: '0 auto',
  },
  main: {
    height: '100% - 17px',
    overflow: 'auto',
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <Playlist />
      </Box>
      <Controls />
    </Box>
  );
};

export default Main;
