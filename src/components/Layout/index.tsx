import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ControlPanel } from "../elements/ControlPanel";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    width: 425,
    height: 812,
    border: "1px solid black",
    backgroundColor: theme.palette.primary.main,
  },
}));

export const Layout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ControlPanel />
    </Box>
  );
};
