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
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../assets/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

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
    const { Component, pageProps, err, emotionCache = clientSideEmotionCache, } = props;
    const [path, setPath] = useState()

    useEffect(() => {
        if(path !== window.location.pathname) {
            // @ts-ignore
            setPath(window.location.pathname);
        }
    }, [path])

    return (
      <React.Fragment>
          <CacheProvider value={emotionCache}>
              <Head>
                  <meta name="viewport" content="initial-scale=1, width=device-width" />
                  <title>Bozeman Community Kiln • BCKstudio.com</title>
              </Head>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <ErrorBoundary>
                  <Layout {...pageProps} err={err}>
                    <Component {...pageProps}/>
                  </Layout>
                </ErrorBoundary>
              </ThemeProvider>
          </CacheProvider>
      </React.Fragment>
    );
}
