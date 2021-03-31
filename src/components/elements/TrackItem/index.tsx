import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(4, 16),
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    width: '100%',
  },
}));

export const TrackItem = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography>Track Name</Typography>
        <Typography>Track Author</Typography>
      </Box>
      <Typography>0</Typography>
    </Box>
  );
};
