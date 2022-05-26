/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */
import React from "react";
import {ButtonProps, Button} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import {grayColor} from "../../assets/theme";
import {Theme} from "@mui/system";

const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            fontWeight: "bold",
            fontSize: "1.125rem",
            lineHeight: "1.42857143",
            minHeight: "auto",
            minWidth: "auto",
            margin: "0.3125rem 0.0625rem",
            padding: "0.75rem 1.875rem",
            textTransform: "uppercase",
            willChange: "box-shadow, transform",
            transition:
                "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            borderRadius: "0.2rem",
            "&:hover,&:focus": {
                backgroundColor: grayColor,
                color: theme.palette.primary.contrastText
            }
        }
}));

const PrimaryContainedButton = (props: ButtonProps) => {
    const classes = useStyles(props);
    const {size, href, ...rest} = props;


    return (
        <React.Fragment>
             < // @ts-ignore
                 Button {...rest}
                        className={classes.root}
                        variant={"contained"} color={"primary"} size={size} href={href}/>
            </React.Fragment>
    );
};

PrimaryContainedButton.defaultProps = {
    size: "large"
}
export default PrimaryContainedButton;

