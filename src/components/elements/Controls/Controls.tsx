import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { PauseIcon, PlayIcon, StopIcon } from 'assets';
import { useSelector } from 'react-redux';

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
  trackName: {
    color: 'white',
  },
}));

export const Controls = () => {
  const classes = useStyles();
  // @ts-ignore
  const { trackName, author } = useSelector(state => state.audio);

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
      {trackName && author && (
        <Typography className={classes.trackName}>
          {trackName} <span> — </span> {author}
        </Typography>
      )}
    </Box>
  );
};
