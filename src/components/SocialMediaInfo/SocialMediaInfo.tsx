// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
import {container, title} from "../../assets/globals";
//@ts-ignore
import classNames from "classnames";
// Components
import {Typography} from "@mui/material";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Image from "next/image";
import theme from "../../assets/theme";
// Assets

const useStyles = makeStyles((theme) => ({

    container: {
        ...container,
        zIndex: "12",
        textAlign: "center",

    },
    socialMediaTitle: {
        margin: "1.75rem 0 0.875rem",
        marginBottom: "1rem",
        marginTop: "2rem",
        textDecoration: "none",
        fontWeight: "bold",
        fontFamily: 'Asap, sans-serif',
        display: "inline-block",
        position: "relative",
        color: "#FFFFFF",
        textShadow: "2px 2px 4px #000000",
        //@ts-ignore
        [theme.breakpoints?.up('md')]: {
            marginTop: "10%"
        },
        //@ts-ignore
        [theme.breakpoints?.down("sm")]: {
            marginTop: "30%"
        }
    },
    icon: {
        boxShadow: "0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)",
        borderRadius: "10px",
        width: "40px",
        backgroundColor: "white"

    },
}));

export default function SocialMediaInfo() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.container} aria-label={'Social Media Links'}>
                <Typography variant={"h3"} className={classes.socialMediaTitle} >Find the Latest on Social Media</Typography>
                <GridContainer spacing={0} justifyContent={"center"}>
                    <GridItem xs={2} sm={2} md={1} aria-label={'Facebook Link'}>
                        <a href={"https://www.facebook.com/BozemanCommunityKiln"} rel="noopener noreferrer" target={"_blank"}>
                            <Image src={"https://media.graphassets.com/8KDmAb7aTjGw6RsxKkIa"} alt={"Follow on Facebook"} className={classes.icon} width={"40px"} height={"40px"}/>
                        </a>
                    </GridItem>
                    <GridItem xs={2} sm={2} md={1} aria-label={'Instagram Link'}>
                        <a href={"https://www.instagram.com/bckiln/"} rel="noopener noreferrer" target={"_blank"}>
                            <Image src={"https://media.graphassets.com/pOsoM4xoSNiGPWq5d1Jg"} alt={"Follow on Instagram"} className={classes.icon} width={"40px"} height={"40px"}/>
                        </a>
                    </GridItem>
                </GridContainer>
            </div>
        </React.Fragment>
    );
}

