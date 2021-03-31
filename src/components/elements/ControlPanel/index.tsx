import React from 'react';
import {
  Box,
  IconButton,
  makeStyles,
  Slider,
  Tooltip,
  Typography,
} from '@material-ui/core';

import {
  Add,
  AvTimer,
  Pause,
  PlayArrow,
  Speed,
  Stop,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(16, 20),
    borderRadius: theme.spacing(16, 16, 0, 0),
    boxShadow: 'inset 0px 0px 8px rgb(215 215 215 / 30%)',
  },
  iconButton: {
    width: 47,
    height: 39,
    backgroundColor: theme.palette.text.primary,
    boxShadow: `inset 0px 0px 10px ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(8),
    margin: theme.spacing(0, 4),
    '&:hover': {
      backgroundColor: `${theme.palette.text.primary}`,
    },
  },
  addPointButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: theme.palette.text.primary,
  },
  currentPos: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  gutterBottom: {
    marginBottom: theme.spacing(16),
  },
}));

interface IValueLabelComponentProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

export const ControlPanel = () => {
  const classes = useStyles();

  function ValueLabelComponent(props: IValueLabelComponentProps) {
    const { children, open, value } = props;

    return (
      <Tooltip
        classes={{ tooltip: classes.currentPos }}
        open={open}
        enterTouchDelay={0}
        placement='top'
        title={value}
      >
        {children}
      </Tooltip>
    );
  }

  return (
    <Box className={classes.root}>
      <Typography color='textPrimary'>Текущий трек</Typography>
      <Typography
        color='textPrimary'
        classes={{ gutterBottom: classes.gutterBottom }}
        gutterBottom
      >
        Название трека
      </Typography>
      <IconButton classes={{ root: classes.addPointButton }}>
        <Add />
      </IconButton>
      <Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography color='textPrimary'>0:00</Typography>
          <Typography color='textPrimary'>0:00</Typography>
        </Box>
        <Slider
          color='secondary'
          defaultValue={0}
          ValueLabelComponent={ValueLabelComponent}
        />
      </Box>
      <Box textAlign='center'>
        <IconButton className={classes.iconButton}>
          <AvTimer />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <PlayArrow />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <Pause />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <Stop />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <Speed />
        </IconButton>
      </Box>
    </Box>
  );
};
