import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import { ControlPanel } from '../elements/ControlPanel';
import cx from 'classnames';
import SwipeableViews from 'react-swipeable-views';

import { TrackList } from 'components/elements/TrackList';
import { BreakpointsList } from 'components/elements/BreakpointsList';

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
  tabs: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
  content: {
    height: 'calc(100% - 84px)',
    overflowY: 'auto',
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
  const [currentTab, setCurrentTab] = useState(0);

  const layoutStyles = cx({
    [classes.root]: true,
    [classes.openPopup]: showControls,
  });

  // TabPanelProps
  function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
      <div role='tabpanel' hidden={value !== index} id={index} {...other}>
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <Box className={layoutStyles}>
      <AppBar position='static' color='default'>
        <Tabs
          className={classes.tabs}
          value={currentTab}
          onChange={handleChange}
          indicatorColor='secondary'
          variant='fullWidth'
        >
          <Tab className={classes.tabs} label='Плейлист' id='0' />
          <Tab className={classes.tabs} label='Точки' id='1' />
          <Tab className={classes.tabs} label='Настройки' id='2' />
        </Tabs>
      </AppBar>
      <Box className={classes.content}>
        <SwipeableViews index={currentTab} onChangeIndex={handleChangeIndex}>
          <TabPanel value={currentTab} index={0}>
            <TrackList />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <BreakpointsList />
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            Привет!
          </TabPanel>
        </SwipeableViews>
      </Box>
      <Button
        className={classes.showControl}
        fullWidth
        onClick={() => setShowControls(prev => !prev)}
        variant='contained'
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
