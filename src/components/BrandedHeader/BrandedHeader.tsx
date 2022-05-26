/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */

// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
import {Hidden} from "@mui/material";
import {brandFont} from "../../assets/globals";
//Components
// Assets

// @ts-ignore
const useStyles = makeStyles((theme) => ({
    outerBox: {
        width: "100%",
        marginLeft: "-1rem"
    },
    mainContentRaised: {
        zIndex: "3",
        paddingBottom: "2.5rem",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        margin: "auto",
        // @ts-ignore
        backgroundColor: theme.palette?.secondary?.main,
        position: "relative",
        textAlign: "center",
        maxWidth: "100%",
    },
    brandFont,
    smMainContentRaised: {
        zIndex: "3",
        marginTop: "7.7rem",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto",
        },
        // @ts-ignore
        backgroundColor: theme.palette?.secondary?.main,
        position: "relative",
        textAlign: "center"
    }

}));

export default function BrandedHeader(props:any) {
    const classes = useStyles();
    const {} = props
    return (
        <React.Fragment>
            <Hidden smDown>
                <div className={classes.outerBox}>
                    <div className={classNames(classes.mainContentRaised)}>
                        {props.children}
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className={classNames(classes.smMainContentRaised)}>
                    {props.children}
                </div>
            </Hidden>
        </React.Fragment>
    );
}