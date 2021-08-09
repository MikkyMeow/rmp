import { makeStyles } from '@material-ui/core';
import { TrackInfo } from 'common/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectTrackAction } from 'store/audioReducer';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: '24px',
  },
  track: {
    paddingLeft: 12,
  },
  button: {
    background: 'none',
    color: '#777',
    padding: 16,
    width: '100%',
    border: '1px solid transparent',
    textAlign: 'left',
    '&:hover': {
      borderColor: 'red',
    },
  },
  trackName: {
    color: '#fff',
  },
}));

interface ITrack {
  trackName: string;
  author: string;
  path: string;
}

export const Playlist = () => {
  const classes = useStyles();
  const playlist = useSelector((state: RootState) => state.playlist.playlist);
  const dispatch = useDispatch();

  const playTrack = (track: TrackInfo) => {
    dispatch(selectTrackAction(track));
  };

  return (
    <ol className={classes.root}>
      {playlist.map((track: ITrack, index: number) => (
        <li className={classes.track} key={index}>
          <button className={classes.button} onClick={() => playTrack(track)}>
            <span className={classes.trackName}>{track.trackName}</span>
            <span> — </span>
            <span>{track.author}</span>
          </button>
        </li>
      ))}
    </ol>
  );
};
