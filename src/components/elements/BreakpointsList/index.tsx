import React from 'react';
import { makeStyles, List, ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(16),
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    width: '100%',
  },
}));

export const BreakpointsList = () => {
  const classes = useStyles();
  const mockArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <List>
      {mockArr.map(index => (
        <ListItem className={classes.root} key={index} disableGutters>
          <Typography>0:00</Typography>
        </ListItem>
      ))}
    </List>
  );
};
