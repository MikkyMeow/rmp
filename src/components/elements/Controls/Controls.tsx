import { Box, IconButton, makeStyles } from '@material-ui/core';
import { PauseIcon, PlayIcon, StopIcon } from 'assets';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#181818f2',
    borderTop: '1px solid red',
    bottom: 0,
    width: '100%',
    height: 60,
  },
  icon: {
    color: 'red',
  },
}));

export const Controls = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton>
        <PlayIcon className={classes.icon} />
      </IconButton>
      <IconButton>
        <PauseIcon className={classes.icon} />
      </IconButton>
      <IconButton>
        <StopIcon className={classes.icon} />
      </IconButton>
    </Box>
  );
};
