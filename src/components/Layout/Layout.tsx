import React from 'react';
import { Box, Button, IconButton, Slider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  Add,
  AvTimer,
  Pause,
  PlayArrow,
  Speed,
  Stop,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: 425,
    height: 812,
    border: '1px solid black',
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: 'red',
  },
}));

export const Layout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography>Текущий трек</Typography>
        <Typography>Название трека</Typography>
        <IconButton>
          <Add />
        </IconButton>
        <Slider></Slider>
        <Box>
          <IconButton>
            <AvTimer />
          </IconButton>
          <IconButton>
            <PlayArrow />
          </IconButton>
          <IconButton>
            <Pause />
          </IconButton>
          <IconButton>
            <Stop />
          </IconButton>
          <IconButton>
            <Speed />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
