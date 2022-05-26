// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
// Components
import {Grid, GridProps} from "@mui/material";
// Assets

/* eslint-disable no-unused-vars */
const useStyles = makeStyles(() => ({
    /* eslint-enable no-unused-vars */

    grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }

}));

export default function GridItem(props: GridProps) {
  const classes = useStyles(props);
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
};
