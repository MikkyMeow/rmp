import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: 425,
    height: 812,
    border: '1px solid black',
  },
}));

export const Layout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h2>Hello</h2>
    </Box>
  );
};
