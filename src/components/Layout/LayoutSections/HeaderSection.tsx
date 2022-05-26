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
const useStyles = makeStyles(() => ({
    banner: {
        maxWidth: "1442px",
        height: "100%",
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
                rightLinks={<HeaderLinks/>}
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
                    rightLinks={<HeaderLinks/>}
                    fixed
                    size={"xs"}
                    {...rest}

                />
            </Hidden>
            <Hidden lgUp xsDown>
                <SmallHeader
                    color="white"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    {...rest}
                />
            </Hidden>
            <div className={classes.banner}>
                <Hidden smDown>
                    <Image src={"https://media.graphassets.com/0dKLkonoS7Kw0RXSJhRV"} width={"1442"} height={"450"} alt={"Forming Bowl with Rib"} placeholder={"blur"} blurDataURL={"/1x1-005e5e7f.png"} priority/>
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