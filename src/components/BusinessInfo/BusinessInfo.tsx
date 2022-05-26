// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
import {container, title, dividerBar, mainElement} from "../../assets/globals";
//Components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import {Hidden, Typography} from "@mui/material";
import Image from "next/image";
// Assets

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */

    container,
    title,
    dividerBar,
    mainElement,
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto",
    },
    icon: {
        width: "18px",
        height: "18px",
        position: "relative",
        top: "3px"
    },
    centered: {
        textAlign: "center"
    },
    verticalCones: {
        height: "10rem"
    },
    inline: {
        display: "inline"
    },
    vertCones: {
        marginTop: "2rem"
    },
    horizCones: {
        marginTop: "2rem"
    },
    phone: {
        display: "inline",
    },
    phoneLink: {
        display: "inline",
    },
    center: {
        maxWidth: "12rem",
        margin: "auto"
    }
}));

export default function BusinessInfo(props: any) {
    const classes = useStyles(props);
    return (
        <div>
            <div className={classes.dividerBar}/>
            <GridContainer spacing={0} justifyContent={"center"} aria-label={'Business Info'}>
                <GridItem xs={12} sm={12} md={3} aria-label={'Business Hours'}>
                    <Typography variant={"h3"} className={classNames(classes.title, classes.centered)}>HOURS</Typography>
                    <Typography variant={"body1"} className={classes.centered}> Tuesday &amp; Wednesday 8:30AM - 5:30PM<br/>Thursday -
                        Saturday 9:00AM - 6:30PM<br/>Closed Sunday &amp; Monday</Typography>
                </GridItem>
                <Hidden smDown>
                    <div className={classes.vertCones}>
                        <Image src={"https://media.graphassets.com/hfaJUnYBRIC8AySsGbkB"} alt={"Vertical divider which shows temperature cones at various stages of drooping"} height={"160"} width={"12"} unoptimized/>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div className={classes.horizCones}>
                        <Image src={"https://media.graphassets.com/MFyMrP7IQisembYJM4k6"} alt={"Horizontal divider which shows temperature cones at various stages of drooping"} height={"32"} width={"240"} unoptimized/>
                    </div>
                </Hidden>
                <GridItem xs={12} sm={12} md={3} aria-label={'Business Address'}>
                    <Typography variant={"h3"} className={classNames(classes.title, classes.centered)} align={"center"}>LOCATION</Typography>
                    <Typography variant={"body1"} className={classes.centered} align={"center"}>6062 Jackrabbit Lane<br/>
                        Belgrade, Montana 59714
                    </Typography>
                    <div className={classes.center}>
                        <Typography variant={"h6"} component={"p"} className={classNames(classes.title, classes.phone)} align={"center"} justifySelf={"center"}>
                            Phone:
                        </Typography>
                        <Typography variant={"body1"} className={classes.phoneLink} align={"center"}>
                            <a href={"tel:+14062249229"}> (406)224-9229</a>
                        </Typography>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}