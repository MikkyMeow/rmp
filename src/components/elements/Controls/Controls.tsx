import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { PauseIcon, PlayIcon, StopIcon } from 'assets';
import { pauseTrack, playTrack, stopTrack } from 'common/utils/player';
import { useRef } from 'react';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { iconButton } from 'styles/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#181818f2',
    bottom: 0,
    width: '100%',
    height: 60,
  },
  icon: {
    color: 'red',
  },
  trackName: {
    marginLeft: 16,
    color: 'white',
  },
  iconButton: {
    ...iconButton,
  },
  iconButtonDisabled: {
    ...iconButton.disabled,
  },
  rangeRail: {
    position: 'absolute',
    top: -8,
    height: 8,
    backgroundColor: '#ff000033',
    width: '100%',
  },
  rangeTrack: {
    position: 'absolute',
    height: 8,
    backgroundColor: 'red',
    zIndex: 1,
  },
}));

export const Controls = () => {
  const classes = useStyles();
  const audio = useMemo(() => new Audio(), []);
  const { path, trackName, author } = useSelector(
    (state: RootState) => state.audio
  );
  const range = useRef(null);

  useEffect(() => {
    audio.src = path;
    playTrack(audio);
  }, [path, audio]);

  audio.volume = 0.3;

  audio.addEventListener('timeupdate', () => {
    // @ts-ignore
    range.current.style.width =
      (audio.currentTime / audio.duration) * 100 + '%';
  });

  const getPosition = (e: React.MouseEvent) => {
    audio.currentTime = (e.clientX / window.innerWidth) * audio.duration;
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.rangeRail} onClick={e => getPosition(e)}>
        {/* @ts-ignore */}
        <Box className={classes.rangeTrack} ref={range}></Box>
      </Box>
      <Box display='flex' alignItems='center'>
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
    </Box>
  );
};
