/*
 * Copyright (c) 5/27/22. Bozeman Community Kiln
 */

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import theme from "../assets/theme";
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../assets/createEmotionCache';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const {extractCriticalToChunks} = createEmotionServer(cache);

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App: any) =>
            function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

    return {
        ...initialProps,
        emotionStyleTags,
      };
  }

  render() {
    return (
      <Html>
        <Head lang={"en"}>
            <link rel="apple-touch-icon" sizes="180x180" href={"/apple-touch-icon.png"}/>
                    <link rel="icon" type="image/png" sizes="32x32" href={"/favicon-32x32.png"}/>
                    <link rel="icon" type="image/png" sizes="16x16" href={"/favicon-16x16.png"}/>
                    <link rel="manifest" href={"/manifest.json"}/>
                    <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#406d7f"/>
                    <meta name="msapplication-TileColor" content="#00aba9"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8"/>
                    <meta name="theme-color" content={theme.palette?.primary?.main}/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"
                          crossOrigin={"true"}/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Asap:wght@600;700&family=Lato:ital,wght@1,400;1,700&family=Merriweather+Sans:wght@800&display=optional"
                        rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument