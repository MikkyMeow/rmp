import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { PauseIcon, PlayIcon, StopIcon } from 'assets';
import { pauseTrack, playTrack, stopTrack } from 'common/utils/player';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { iconButton } from 'styles/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
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
  iconButton: {
    ...iconButton,
  },
  iconButtonDisabled: {
    ...iconButton.disabled,
  },
}));

export const Controls = () => {
  const classes = useStyles();
  const audio = useMemo(() => new Audio(), []);
  const { path, trackName, author } = useSelector(
    (state: RootState) => state.audio
  );

  useEffect(() => {
    audio.src = path;
    playTrack(audio);
  }, [path, audio]);

  return (
    <Box className={classes.root}>
      <IconButton
        className={classes.iconButton}
        classes={{ disabled: classes.iconButtonDisabled }}
        onClick={() => playTrack(audio)}
        disabled={!trackName && !author}
      >
        <PlayIcon className={classes.icon} />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        classes={{ disabled: classes.iconButtonDisabled }}
        onClick={() => pauseTrack(audio)}
        disabled={!trackName && !author}
      >
        <PauseIcon className={classes.icon} />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        classes={{ disabled: classes.iconButtonDisabled }}
        onClick={() => stopTrack(audio)}
        disabled={!trackName && !author}
      >
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
