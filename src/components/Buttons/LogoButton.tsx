/*
 * Copyright (c) 5/25/22. Bozeman Community Kiln
 */

// Core
import React from "react";
// Style
import {makeStyles} from "@mui/styles";
//@ts-ignore
import classNames from "classnames";
//Components
import {Button} from "@mui/material";
import Image from "next/image";
// Assets

export default function LogoButton(props: any) {
    const {id, hidden, height, width, src, ...rest} = props
    return (
        <Button hidden={hidden}  {...rest}>
            <div id={id} hidden={hidden}>
                <Image src={src} alt={"Bozeman Community Kiln Home"} height={height} width={width} unoptimized/>
            </div>
        </Button>
    );
}