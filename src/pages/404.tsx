/*
 * Copyright (c) 5/18/22. Bozeman Community Kiln
 */

import Error from "next/error";
import React from "react";
import Head from "next/head";

export default function NotFound() {
    return (
        <React.Fragment>
            <Head>
                <title>404 - Not Found</title>
                <meta name="robots" content="noindex, nofollow"/>
            </Head>
            <Error statusCode={404} />
        </React.Fragment>
        )
}