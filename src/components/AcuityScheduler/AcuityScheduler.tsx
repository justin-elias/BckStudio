/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */

import React from "react";
import {acuityStyles} from "../../assets/globals";
import {makeStyles} from "@mui/styles";
import Script from "next/script"
// @ts-ignore
const useStyles = makeStyles(acuityStyles);

export default function AcuityScheduler(props: { src: string; }) {
    const { src } = props;
    const classes = useStyles();

    const source = src ? src : "https://bckstudio-book-now.as.me/";
    return (
        <div className={classes.container} >
            <iframe src={source} width="100%" height="1400" frameBorder="0"/>
            <Script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript" defer={true}/>
        </div>

    )
}
