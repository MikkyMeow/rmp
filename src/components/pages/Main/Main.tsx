import { Box, makeStyles } from '@material-ui/core';
import { Controls } from 'components/elements/Controls/Controls';
import { Playlist } from 'components/elements/Playlist/Playlist';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#181818',
    position: 'relative',
    width: 1440,
    height: '100vh',
    margin: '0 auto',
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Playlist />
      <Controls />
    </Box>
  );
};

export default Main;
