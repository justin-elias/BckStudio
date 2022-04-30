// Core
import React from "react";
// Styles
import {makeStyles} from "@mui/styles";
// Components
import {Hidden} from "@mui/material";
import SmallHeader from "../../Headers/SmallHeader";
import HeaderLinks from "../../Headers/HeaderLinks";
import MainLogo from "./MainLogo";
import Image from "next/image";
import LargeHeader from "../../Headers/LargeHeader";

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
    /* eslint-enable no-unused-vars */
    banner: {
        maxWidth: "1442px",
        margin: "auto"
    },
    lgLogo: {
        marginTop: "-20rem",
        marginBottom: "5rem"
    },
    mdLogo: {
        marginTop: "-15rem",
        marginBottom: "5rem"
    }

}));

export default function HeaderSection(props: any) {
    const { noParallax, ...rest} = props;
    const classes = useStyles();

    return (
        <div>
            <Hidden mdDown>
            <LargeHeader
                color="transparent"
                rightLinks={<HeaderLinks role={"navigation"}/>}
                fixed
                changeColorOnScroll={noParallax === undefined ? {
                    height: 50,
                    color: "white",
                } : {
                    height: -200,
                    color: "white",
                }}
                {...rest}
            />
            </Hidden>
            <Hidden smUp>
                <SmallHeader
                    color="white"
                    rightLinks={<HeaderLinks role={"navigation"}/>}
                    fixed
                    size={"xs"}
                    {...rest}

                />
            </Hidden>
            <Hidden lgUp xsDown>
                <SmallHeader
                    color="white"
                    rightLinks={<HeaderLinks role={"navigation"}/>}
                    fixed
                    {...rest}
                />
            </Hidden>
            <div className={classes.banner}>
                <Hidden smDown>
                    <Image src={"https://media.graphcms.com/0dKLkonoS7Kw0RXSJhRV"} width={"1442"} height={"450"} priority/>
                </Hidden>
                <Hidden mdDown>
                    <div className={classes.lgLogo}>
                        <MainLogo/>
                    </div>
                </Hidden>
                <Hidden smDown lgUp>
                    <div className={classes.mdLogo}>
                        <MainLogo/>
                    </div>
                </Hidden>
            </div>
        </div>
    )
};