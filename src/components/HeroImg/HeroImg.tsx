// Core
import React from "react";
import {HeroImg} from "../../index";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
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
        [theme.breakpoints.up("md")]: {
            minHeight: "450 px"
        },
    },
}));

export default function HeroImg(props: HeroImg) {
    const {src, children} = props;
    const classes = useStyles();
    return (
        <React.Fragment>
        {/*    <div*/}
        {/*    className={classNames(classes.container,)}*/}
        {/*    style={{*/}
        {/*        backgroundImage: src,*/}
        {/*    }}*/}
        {/*>*/}
        {/*    {children}*/}
        {/*</div>*/}
        </React.Fragment>
    );
}