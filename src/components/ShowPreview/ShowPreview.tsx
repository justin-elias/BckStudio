/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */

import React from "react";
import {Typography, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {PreviewProps} from "../../index";

const useStyles = makeStyles( () => ({
    previewWrapper: {
        position: "fixed",
        width: "90%",
        height: "7rem",
        marginLeft: "5%",
        marginTop: "4%",
        zIndex: 10,
        backgroundColor: "#ff4444",
        "&:hover,&:focus": {
            backgroundColor: "#ff4444",
        }
    },
    previewIndicator: {
        color: "#fff",
        backgroundColor: "#ff4444",
    }
}));




export const ShowPreview = (props: PreviewProps) => {
    const classes = useStyles()
    const {page, preview} = props
    if (preview) {
        return (
            <div className={classes.previewWrapper}>
                <Button className={classes.previewIndicator} fullWidth href={`/api/preview?clear=true&page=${page}`}>
                    <Typography variant={"h2"} color={"inherit"} align={"center"}>
                        PREVIEW MODE
                    </Typography>
                </Button>
                <Typography variant={"body1"} color={"textPrimary"} align={"center"}>
                    Click to exit
                </Typography>
            </div>
        )
    }
    return null;
};
