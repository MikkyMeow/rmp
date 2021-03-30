import React, { useState } from 'react';
import { Box, Button, Drawer, makeStyles } from '@material-ui/core';
import { ControlPanel } from '../elements/ControlPanel';
import cx from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    transition: 'height .2s',
  },
  openPopup: {
    height: 'calc(100vh - 206px)',
  },
  showControl: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    border: 0,
  },
}));

export const Layout = () => {
  const classes = useStyles();
  const [showControls, setShowControls] = useState(false);

  const layoutStyles = cx({
    [classes.root]: true,
    [classes.openPopup]: showControls,
  });

  return (
    <Box className={layoutStyles}>
      <Button
        className={classes.showControl}
        fullWidth
        onClick={() => setShowControls(prev => !prev)}
      >
        Show Control Panel
      </Button>
      <Drawer
        anchor='bottom'
        open={showControls}
        variant='persistent'
        classes={{ paperAnchorDockedBottom: classes.drawer }}
      >
        <ControlPanel />
      </Drawer>
    </Box>
  );
};
