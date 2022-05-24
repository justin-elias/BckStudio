/*
 * Copyright (c) 2022. Bozeman Community Kiln
 */

import React, { useEffect, useState } from "react";
import Router from "next/router";
import ReactDOM from "react-dom";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../assets/theme";
import PageChange from "../components/PageChange/PageChange";
import * as Sentry from "@sentry/nextjs"
import { BckAppProps } from "../index";
import Layout from "../components/Layout/Layout";
import {ErrorBoundary} from "@sentry/nextjs";

if (process.env.NODE_ENV === "production") {
    Sentry.init({dsn: process.env.NEXT_PUBLIC_SENTRY_DSN});
}

Router.events.on("routeChangeStart", (url) => {
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
});

Router.events.on("routeChangeComplete", () => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    // @ts-ignore
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

export default function App(props: BckAppProps) {
    const { Component, pageProps, err } = props;
    const [path, setPath] = useState()

    useEffect(() => {
        if(path !== window.location.pathname) {
            // @ts-ignore
            setPath(window.location.pathname);
        }
    })

    return (
      <React.Fragment>
          <Head>
              <link rel="apple-touch-icon" sizes="180x180" href={"../../public/apple-touch-icon.png"}/>
              <link rel="icon" type="image/png" sizes="32x32" href={"../../public/favicon-32x32.png"}/>
              <link rel="icon" type="image/png" sizes="16x16" href={"../../public/favicon-16x16.png"}/>
              <link rel="manifest" href={"../../public/manifest.json"}/>
              <link rel="mask-icon" href={"../../public/safari-pinned-tab.svg"} color="#406d7f"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff"/>
              <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8"/>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
              <title>Bozeman Community Kiln • BCKstudio.com</title>
              <link href="https://fonts.googleapis.com/css2?family=Asap:wght@600;700&family=Lato:ital,wght@0,400;0,700;1,400&family=Merriweather+Sans:wght@800&display=swap" rel="stylesheet"/>
          </Head>
          <ThemeProvider theme={theme}>
              <ErrorBoundary>
              <Layout {...pageProps} err={err}>
                <Component {...pageProps}/>
              </Layout>
            </ErrorBoundary>
          </ThemeProvider>
      </React.Fragment>
    );
}
