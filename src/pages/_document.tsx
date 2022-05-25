/*
 * Copyright (c) 5/24/22. Bozeman Community Kiln
 */

import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href={"/public/apple-touch-icon.png"}/>
            <link rel="icon" type="image/png" sizes="32x32" href={"/public/favicon-32x32.png"}/>
            <link rel="icon" type="image/png" sizes="16x16" href={"/public/favicon-16x16.png"}/>
            <link rel="manifest" href={"/public/manifest.json"}/>
            <link rel="mask-icon" href={"/public/safari-pinned-tab.svg"} color="#406d7f"/>
            <meta name="msapplication-TileColor" content="#00aba9"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8"/>
            <link href="https://fonts.googleapis.com/css2?family=Asap:wght@600;700&family=Lato:ital,wght@0,400;0,700;1,400&family=Merriweather+Sans:wght@800&display=swap"
                  rel="stylesheet"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}