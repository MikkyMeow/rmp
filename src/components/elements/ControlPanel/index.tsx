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
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: `${theme.palette.text.primary}11`,
    },
  },
  addPointButton: {
    position: 'absolute',
    top: 0,
    right: 0,
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
      <IconButton
        className={classes.iconButton}
        classes={{ root: classes.addPointButton }}
        disabled
      >
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
          disabled
        />
      </Box>
      <Box textAlign='center'>
        <IconButton className={classes.iconButton} disabled>
          <AvTimer />
        </IconButton>
        <IconButton className={classes.iconButton} disabled>
          <PlayArrow />
        </IconButton>
        <IconButton className={classes.iconButton} disabled>
          <Pause />
        </IconButton>
        <IconButton className={classes.iconButton} disabled>
          <Stop />
        </IconButton>
        <IconButton className={classes.iconButton} disabled>
          <Speed />
        </IconButton>
      </Box>
    </Box>
  );
};
