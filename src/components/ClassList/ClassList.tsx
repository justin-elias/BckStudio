/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */

import {Hidden, Typography} from "@mui/material";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import classNames from "classnames";
import BookServiceDialog from "../BookServiceDialog/BookServiceDialog";
import React from "react";
import {makeStyles} from "@mui/styles";
import {brandFont, dividerBar, mainElement} from "../../assets/globals";
import BioDialog from "../BioDialog/BioDialog";
import Image from "next/image";
import {nanoid} from "nanoid";
import {ClassType} from "../../index";


const useStyles = makeStyles((theme) => ({
    categoryHeaders: {
        // @ts-ignore
        color: theme.palette.primary.main,
        textAlign: "center",
        paddingTop: "4vh"
    },
    titleContainer: {
        // @ts-ignore
        backgroundColor: theme.palette.secondary.main,
        height: "20vh",
        borderRadius: "0.3rem"

    },
    classHeaders: {
        ...brandFont,
        color: "#555"
    },
    classSubHeaders: {
        color: "#606060",
    },
    verticalCones: {
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    horizontalCones: {
        margin: "auto"
    },
    bookButton: {
        marginLeft: "30%"
    },
    raisedDivider: {
        ...mainElement,
        ...dividerBar,
        marginTop: "2rem",
        marginBottom: "2rem",
        boxShadow: "0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)"
    },
    strike: {
        marginTop: "1rem",
        color: "#f00",
        textDecoration: "line-through"
    },
    strikeText: {
        color: "#333"
    },
    pricing:{
        marginTop: "-1rem",
        marginLeft: "2.5rem"
    },
    priceList: {
        marginTop: "0"
    },
    textBody: {
        maxWidth: "50vw",
        margin: "auto",
        paddingBottom: "2.5rem"
    },
    button: {
        margin: "15%"
    }
}));

export default function ClassList(props: any) {
    const classes = useStyles();
    const { classList, title, defaultInstructor, index } = props;

    const vCone = "https://media.graphassets.com/hfaJUnYBRIC8AySsGbkB"
    const hCone = "https://media.graphassets.com/MFyMrP7IQisembYJM4k6"

    const disableBookDialogButton = (clayClass: { disableBookingButton: string; classLink: string; buttonText: string; }, deviceSize?: string) => {

        if (clayClass.disableBookingButton || !clayClass.classLink) {
            if(deviceSize === "small"){
                return (
                    <Typography align={"center"} className={classNames(classes.classHeaders)}>Call to be placed on our Waitlist!</Typography>
                );
            }
            return (
                <Typography align={"left"} className={classNames(classes.classHeaders)}>Call to be placed on our Waitlist!</Typography>
            );
        }
        return (

            <BookServiceDialog src={clayClass.classLink} buttonText={clayClass.buttonText}/>
            );
    };

    const getClassTitle = (clayClass: ClassType) => {
        if(!clayClass.displayTitle){
            return clayClass.className;
        }

        return clayClass.displayTitle
    };

    const setBackgroundColor = () => {
        if (index !== 0) {
            return classes.titleContainer;
        }
        return null;
    }

    return <React.Fragment>
        <div
            // @ts-ignore
            className={setBackgroundColor()}>
            <Typography
                variant={"h2"}
                align={"center"}
                className={classes.categoryHeaders}
                id={title === "Encounters" ? "play" : ""}
                aria-label={title === " Encounters" ? "play" : ""}
            >
                {title}
            </Typography>
            <Typography variant={"body1"} align={"center"} className={classes.textBody}>
                {classList.description}
            </Typography>
        </div>
            {classList.classes.map((clayClass: ClassType) => (
                <React.Fragment key={nanoid()}>
                    {index !== 0 ?  <div className={classes.raisedDivider}/> : null}
                    <GridContainer
                        // @ts-ignore
                        className={classes.container} alignItems={"center"}>
                        <GridItem xs={12} sm={12} md={3}>
                            <Typography variant={"h5"} align={"center"} className={classNames(classes.classHeaders)}>
                                {getClassTitle(clayClass)}
                            </Typography>
                            <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders}>
                                With: <br/><BioDialog instr={clayClass.instructor} defaultInstructor={defaultInstructor}/><br/>
                            </Typography>
                            {clayClass.classInfoList.map((line: string) => (
                                <Typography variant={"subtitle1"} component={"p"} align={"center"} className={classes.classSubHeaders} key={nanoid()}>
                                    {line}
                                </Typography>
                            ))}
                        </GridItem>
                        <Hidden smDown>
                            <Image src={vCone} alt={"Vertical Cones Divider"} width={"25px"} height={"320px"} className={classes.verticalCones} unoptimized/>
                        </Hidden>
                        <Hidden mdUp>
                            <div className={classes.horizontalCones}>
                                <Image src={hCone} alt={"Horizontal Cones Divider"} width={"160px"} height={"11px"} className={classes.horizontalCones} unoptimized/>
                            </div>
                        </Hidden>
                        <GridItem xs={12} sm={12} md={6}>
                            <ul>
                                {clayClass.classDescriptionList.map( (line: string) => (
                                    <li key={nanoid()}>
                                        <Typography variant={"body1"}>
                                            {line}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                            <Hidden mdDown>
                                <div className={classes.bookButton}>
                                    {disableBookDialogButton(clayClass)}
                                </div>
                            </Hidden>
                        </GridItem>
                    </GridContainer>
                    <Hidden lgUp>
                        <div className={classes.button}>
                            {disableBookDialogButton(clayClass, "small")}
                        </div>
                    </Hidden>
                </React.Fragment>
            ))}
        </React.Fragment>
}

