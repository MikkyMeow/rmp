import { makeStyles } from '@material-ui/core';
import { TrackInfo } from 'common/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectTrackAction } from 'store/audioReducer';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    height: 'calc(100vh - 60px)',
    listStyleType: 'none',
  },
  button: {
    background: 'none',
    color: '#777',
    padding: 16,
    width: '100%',
    textAlign: 'left',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  },
  trackName: {
    color: '#fff',
    marginLeft: 12,
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
        <li key={index}>
          <button className={classes.button} onClick={() => playTrack(track)}>
            <span>{index + 1}.</span>
            <span className={classes.trackName}>{track.trackName}</span>
            <span> — </span>
            <span>{track.author}</span>
          </button>
        </li>
      ))}
    </ol>
  );
};
