import { makeStyles } from '@material-ui/core';
import { tracklist } from 'mock/tracklist';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#777',
    margin: 0,
    padding: '24px',
  },
  track: {
    paddingLeft: 12,
  },
  trackName: {
    color: '#fff',
  },
}));

export const Playlist = () => {
  const classes = useStyles();

  return (
    <ol className={classes.root}>
      {tracklist.map((track, index) => (
        <li className={classes.track} key={index}>
          <button>
            <span className={classes.trackName}>Штиль</span>
            <span> — </span>
            <span>Saigon</span>
          </button>
        </li>
      ))}
    </ol>
  );
};
