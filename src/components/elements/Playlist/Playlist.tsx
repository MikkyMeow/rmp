import { makeStyles } from '@material-ui/core';
import { TrackInfo } from 'common/types';
import { useDispatch, useSelector } from 'react-redux';
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
  // @ts-ignore
  const playlist = useSelector(state => state.playlist.playlist);
  const dispatch = useDispatch();

  const playTrack = (track: TrackInfo) => {
    dispatch(selectTrackAction(track));
  };

  return (
    <ol className={classes.root}>
      {playlist.map((track: ITrack, index: string) => (
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
