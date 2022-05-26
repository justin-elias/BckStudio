// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
//Components
import { List, Button, Hidden, Typography, ListItem, } from "@mui/material";
import Link from "next/link"
import BookServiceDialog from "../BookServiceDialog/BookServiceDialog";
import {HomeOutlined} from "@mui/icons-material";
import {headerLinksStyle} from "../../assets/globals";
import {primaryColor} from "../../assets/theme";
// Assets

// @ts-ignore
const useStyles = makeStyles((theme) => ({
    ...headerLinksStyle,
    bookButton: {
        // @ts-ignore
        backgroundColor: theme.palette.primary.main,
        // @ts-ignore
        color: theme.palette.primary.contrastText,
        marginLeft: "1rem",
    },
    backdrop: {
        // @ts-ignore
        zIndex: theme.zIndex?.drawer + 1,
        color: '#fff',
    },
    navText: {
        fontWeight:"700"
    },
}));

export default function HeaderLinks(props: any) {
    const classes = useStyles();
    const {} = props
    return (
        <React.Fragment>
            <nav role="navigation">
                <List
                    // @ts-ignore
                    className={classes.list}>
                    <ListItem
                        // @ts-ignore
                        className={classes.listItem}>
                        <Link href={"/"} passHref>
                            <Button
                                // @ts-ignore
                                color="inherit"
                                // @ts-ignore
                                className={classes.navLink}
                                >
                                <HomeOutlined
                                    // @ts-ignore
                                    className={classes.icons}/> <Typography variant={"body1"}
                                                                            // @ts-ignore
                                                                            className={classes.navText}>Home</Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem
                        // @ts-ignore
                        className={classes.listItem} color={primaryColor}>
                        <Link href={"/memberships"} passHref>
                            <Button
                                // @ts-ignore
                                color="inherit"
                                // @ts-ignore
                                className={classes.navLink}
                            ><Typography variant={"body1"}
                                         // @ts-ignore
                                         className={classes.navText}>Memberships</Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem
                        // @ts-ignore
                        className={classes.listItem} color={primaryColor}>
                        <Link href={"/classes/"} passHref>
                            <Button
                                // @ts-ignore
                                color="inherit"
                                // @ts-ignore
                                className={classes.navLink}
                            ><Typography variant={"body1"}
                                         // @ts-ignore
                                         className={classes.navText}>Classes</Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem
                        // @ts-ignore
                        className={classes.listItem} color={primaryColor}>
                        <Link href={"/encounters"} passHref>
                            <Button
                                // @ts-ignore
                                color="inherit"
                                // @ts-ignore
                                className={classes.navLink}
                            ><Typography variant={"body1"}
                                         // @ts-ignore
                                         className={classes.navText}>Encounters</Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem
                        // @ts-ignore
                        className={classes.listItem} color={primaryColor}>
                        <Link href={"/contact"} passHref>
                            <Button
                                // @ts-ignore
                                color="inherit"
                                // @ts-ignore
                                className={classes.navLink}
                            ><Typography variant={"body1"}
                                         // @ts-ignore
                                         className={classes.navText}>Contact Us</Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem
                        // @ts-ignore
                        className={classes.listItem} color={"#F00"}>
                        <Link href={"/faq"} passHref>
                            <Button
                                // @ts-ignore
                                color="inherit"
                                // @ts-ignore
                                className={classes.navLink}
                            ><Typography variant={"body1"}
                                         // @ts-ignore
                                         className={classes.navText}>FAQ Page</Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <Hidden mdDown>
                        <ListItem
                            // @ts-ignore
                            className={classes.listItem}>
                            <BookServiceDialog buttonText={"Book Now"}
                                               // @ts-ignore
                                               className={classNames(classes.navLink)}/>
                        </ListItem>
                    </Hidden>
                </List>
            </nav>
        </React.Fragment>
    );
}