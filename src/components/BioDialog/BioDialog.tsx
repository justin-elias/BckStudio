/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */

import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@mui/styles";
// @material-ui/icons
import  {Close} from "@mui/icons-material"
// core components
import Image from "next/image";
import {Dialog, DialogContent, DialogTitle, Fade, IconButton, Toolbar, Typography, Button} from "@mui/material";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import {dividerBar, mainElement, container, headerLinksStyle} from "../../assets/globals";

// @ts-ignore
const useStyles = makeStyles((theme) => ({
    ...headerLinksStyle,
    ...container,
    dialog: {
        // @ts-ignore
        zIndex: theme.zIndex?.drawer + 1
    },
    appBar: {
        position: "relative",
        // @ts-ignore
        backgroundColor: theme.palette?.secondary?.main,
        // @ts-ignore
        color: theme.palette?.secondary?.contrastText
    },
    title: {
        flex: 1,
        fontWeight: "700",
        textAlign: "center",
    },
    dialogButton: {
        position: "absolute",
    },
    raisedDivider: {
        ...mainElement,
        ...dividerBar,
        marginTop: "2rem",
        marginBottom: "2rem"
    },
    bioImg: {
        margin: "1.5rem"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return < // @ts-ignore
        Fade ref={ref} {...props} />;
});

export default function BioDialog(props: any) {
    const classes = useStyles();
    const {instr, defaultInstructor} = props;
    const [open, setOpen] = React.useState(false);
    let instructor = defaultInstructor.instructor;

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    if (instr) {
        instructor = instr;
    }

    return (
        <React.Fragment>
            < // @ts-ignore
                Button variant={"outlined"} onClick={handleToggle} color={"primary"} aria-label={"Instructor Bio"}>
                {instructor.firstName}
            </Button>
            <Dialog open={open} onBackdropClick={handleClose}
                    // @ts-ignore
                    TransitionComponent={Transition}
                    // @ts-ignore
                    className={classes.container}>
                <DialogTitle
                    // @ts-ignore
                    className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Close/>
                        </IconButton>
                        < // @ts-ignore
                            Typography variant="h5" className={classes.title} align={"center"}>
                            Meet {instructor.firstName}
                        </Typography>
                    </Toolbar>
                </DialogTitle>
                <DialogContent>
                    <GridContainer
                        // @ts-ignore
                        align={"center"}>
                        <GridItem xs={12} md={12}>
                            <Image src={instructor.headshotImage.url} width={instructor.headshotImage.width} height={instructor.headshotImage.height} alt={instructor.headshotImage.altText}
                                   // @ts-ignore
                                   className={classes.bioImg}/>
                        </GridItem>
                        <GridItem xs={12} md={12}>
                            < // @ts-ignore
                                Typography variant={"body1"}>
                                {instructor.bio.text}
                            </Typography>
                            <div
                                // @ts-ignore
                                className={classes.raisedDivider}/>
                            < // @ts-ignore
                                Typography variant={"body1"}>
                                {instructor.instructorStatement.text}
                            </Typography>
                        </GridItem>
                    </GridContainer>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
