// Core
import React from "react";
import {BckAppProps} from "../../index";
// Styles
import {makeStyles} from "@mui/styles";
import {Hidden} from "@mui/material";
// @ts-ignore
import classNames from "classnames";
// Children
import HeaderSection from "./LayoutSections/HeaderSection";
import Footer from "./LayoutSections/Footer";
//Assets

const useStyles = makeStyles((theme) => ({

    mainElement: {
        background: "#FFFFFF",
        zIndex: "2",
        position: "relative",
        borderRadius: "0.375rem",
        boxShadow: "0 1rem 1.5rem 0.125rem rgba(0, 0, 0, 0.14), 0 0.375rem 1.875rem 0.313rem rgba(0, 0, 0, 0.12), 0 0.5rem 0.625rem -0.313rem rgba(0, 0, 0, 0.2)"
    },
    parallaxMargin: {
        margin: "-3.75rem 5rem 2.5rem",
    },
    noParallaxMargin: {
        margin: "15rem 5rem 2.5rem",
    },
    small: {
        margin: "-3.75rem 0rem 0rem",
    }
}));

export default function Layout(props: BckAppProps) {
    const classes = useStyles();
    const {} = props
    return (
        <React.Fragment>
            <HeaderSection />
            <main role="main">
                <Hidden smDown>
                    <div className={classNames(classes.mainElement, classes.parallaxMargin)} id={"mainElement"}>
                        {props.children}
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div className={classNames(classes.mainElement, classes.small)} id={"mainElement"}>
                        {props.children}
                    </div>
                </Hidden>
            </main>
            <Footer {...props} />
        </React.Fragment>
    );
}