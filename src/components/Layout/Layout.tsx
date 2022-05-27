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
import SocialMediaInfo from "../SocialMediaInfo/SocialMediaInfo";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
//Assets

const useStyles = makeStyles(() => ({
    defaultBackground: {
        background: "#e5e5e5",
        position: "relative",
    },
    mainElement: {
        margin: "auto",
        maxWidth: "1442px",
        background: "#FFFFFF",
        zIndex: "2",
        position: "relative",
        borderRadius: "0.375rem",
        boxShadow: "0 1rem 1.5rem 0.125rem rgba(0, 0, 0, 0.14), 0 0.375rem 1.875rem 0.313rem rgba(0, 0, 0, 0.12), 0 0.5rem 0.625rem -0.313rem rgba(0, 0, 0, 0.2)"
    },
    small: {
        margin: "-3.75rem 0rem 0rem",
    },
}));

export default function Layout(props: BckAppProps) {
    const {children} = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.defaultBackground}>
                    <HeaderSection />
                    <Hidden smDown>
                        <div className={classNames(classes.mainElement)} id={"mainElement"}>
                            {children}
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <div className={classNames(classes.mainElement, classes.small)} id={"mainElement"}>
                            {children}
                        </div>
                    </Hidden>
                <SocialMediaInfo/>
                </div>

                {/*<BusinessInfo/>*/}
                {/*<Footer {...props} />*/}
        </React.Fragment>
    );
}