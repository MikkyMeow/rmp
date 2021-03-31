import React from 'react';
import { List, ListItem, makeStyles } from '@material-ui/core';

import { TrackItem } from 'components/elements/TrackItem';

const useStyles = makeStyles(theme => ({
  root: {
    overflowY: 'auto',
  },
}));

export const TrackList = () => {
  const classes = useStyles();
  const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <List className={classes.root} disablePadding>
      {mockArr.map(index => (
        <ListItem disableGutters key={index}>
          <TrackItem />
        </ListItem>
      ))}
    </List>
  );
};
