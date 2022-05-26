// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
import {mainLogoStyle} from "../../../assets/globals";
//Components
import { Hidden } from "@mui/material";
import GridItem from "../../Grid/GridItem";
import GridContainer from "../../Grid/GridContainer";
import Image from "next/image";
// Assets

// @ts-ignore
const useStyles = makeStyles(() => ({
    ...mainLogoStyle,
    heroButton: {
        position: "sticky",
    }

}));

export default function MainLogo() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <Hidden smDown>
                            <Image src={"https://media.graphassets.com/XMAKIRSSVyM1QPf2Y8hG"} alt={"Bozeman Community Kiln"} height={"197"} width={"704"} unoptimized/>
                        </Hidden>
                    </GridItem>
                </GridContainer>
            </div>
        </React.Fragment>
    );
}