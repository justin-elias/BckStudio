// Core
import React from "react";
import {Grid, GridProps} from "@mui/material";
// Style
//@ts-ignore
import classNames from "classnames";
// Assets

export default function GridContainer(props: GridProps) {
    const { children, className, ...rest } = props;

  return (
    <Grid container {...rest} className={className}>
      {children}
    </Grid>
  );
};