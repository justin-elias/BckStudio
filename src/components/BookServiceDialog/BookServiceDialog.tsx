/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@mui/styles";
// @material-ui/icons
import Close from "@mui/material/Icon";
// core components
import {container, headerLinksStyle} from "../../assets/globals";
import {Dialog, DialogContent, DialogTitle, Fade, IconButton, Toolbar, Typography} from "@mui/material";
import AcuityScheduler from "../AcuityScheduler/AcuityScheduler";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import PrimaryContainedButton from "../Buttons/PrimaryContainedButton";
import {logModalView} from "../../utils/analytics/analytics";

// @ts-ignore
const useStyles = makeStyles((theme) => ({
    ...headerLinksStyle,
    ...container,
    dialog: {
        // @ts-ignore
        zIndex: theme.zIndex.drawer + 1
    },
    appBar: {
        position: "relative",
        // @ts-ignore
        backgroundColor: theme.palette.secondary.main,
        // @ts-ignore
        color: theme.palette.secondary.contrastText
    },
    bookButton: {
        marginTop: "0",
        // @ts-ignore
        [theme.breakpoints.down("md")]: {
            margin: "auto"

        },
    },
    title:{
        flex: 1,
        fontWeight: "700",
        textAlign: "center",
    },
    dialogButton: {
        position: "absolute",
    },
    buttonText:{
        margin:"auto",
    },
    navText: {
        fontWeight: "700"
    },
    centered: {
        margin: "auto"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    // @ts-ignore
    return <Fade ref={ref} {...props} >{props.children}</Fade>;
});

export default function BookServiceDialog(props: any) {
    const classes = useStyles();
    const { buttonText, src, size} = props;
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (serviceName: any) => {
        logModalView(serviceName)
        setOpen(!open);
    };
    const button = () => {
        if(size === "xs") {
            return
        }
        // @ts-ignore
        return (
            <React.Fragment>
                <div  // @ts-ignore
                    className={classes.centered}>
                    <PrimaryContainedButton
                        aria-label={"book service"}
                        // @ts-ignore
                        className={classNames(classes.navLink,classes.bookButton)}
                        id={"book-header"}
                        onClick={() => {
                            handleOpen(buttonText)
                        }}
                        size={"small"}
                    >
                        <div // @ts-ignore
                            className={classes.buttonText}>
                            <Typography variant={"body1"}
                                // @ts-ignore
                                        className={classes.navText}>{buttonText}</Typography>
                        </div>
                    </PrimaryContainedButton>
                </div>
            </React.Fragment>
        )
    }
    return (
        <div>
            {button()}

            <Dialog fullScreen open={open} onBackdropClick={handleClose}
                    // @ts-ignore
                    TransitionComponent={Transition}>
                <DialogTitle
                    // @ts-ignore
                    className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Close />
                        </IconButton>
                        <Typography variant="h5"
                                    // @ts-ignore
                                    className={classes.title} align={"center"}>
                            Let&apos;s Get You Booked
                        </Typography>
                    </Toolbar>
                </DialogTitle>
                <DialogContent>
                    <GridContainer
                        // @ts-ignore
                        align={"center"}>
                        <GridItem xs={12}>
                            <AcuityScheduler src={src}/>
                        </GridItem>
                    </GridContainer>
                </DialogContent>
            </Dialog>
        </div>
    )
}
