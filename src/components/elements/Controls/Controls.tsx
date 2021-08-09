import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { PauseIcon, PlayIcon, StopIcon } from 'assets';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

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
  const { path, trackName, author } = useSelector(
    (state: RootState) => state.audio
  );

  const audio = new Audio();
  audio.src = path;

  const playTrack = () => {
    audio.play();
  };

  const pauseTrack = () => {
    audio.pause();
  };

  const stopTrack = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <Box className={classes.root}>
      <IconButton onClick={playTrack}>
        <PlayIcon className={classes.icon} />
      </IconButton>
      <IconButton onClick={pauseTrack}>
        <PauseIcon className={classes.icon} />
      </IconButton>
      <IconButton onClick={stopTrack}>
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
