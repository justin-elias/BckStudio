// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
import {HeroImgProps} from "../../index";
// Assets

const useStyles = makeStyles((theme) => ({
    container: {
        zIndex: "0",
        marginTop: "-4.375rem",
        position: "relative",
        backgroundPosition: "center top",
        backgroundSize: "100%",
        backgroundRepeat: " no-repeat",
        //@ts-ignore
        [theme.breakpoints?.up("md")]: {
            minHeight: "450 px",
            maxWidth: "1442px",
        },
    },
}));

export default function HeroImg(props: HeroImgProps) {
    const {children} = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <div
            className={classNames(classes.container)}
        >
            {children}
        </div>
        </React.Fragment>
    );
}