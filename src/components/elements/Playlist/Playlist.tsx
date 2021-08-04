import { makeStyles } from '@material-ui/core';
import { tracklist } from 'mock/tracklist';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: '24px',
  },
  track: {
    paddingLeft: 12,
  },
  button: {
    border: 'none',
    background: 'none',
    color: '#777',
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
          <button className={classes.button}>
            <span className={classes.trackName}>{track.trackName}</span>
            <span> — </span>
            <span>{track.author}</span>
          </button>
        </li>
      ))}
    </ol>
  );
};
