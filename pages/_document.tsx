import React from "react";
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import flush from "styled-jsx/server";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default class MyDocument extends Document {
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = flush();
    return { ...initialProps, styles };
  }

  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com" />
          {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:700|Merriweather:300,300i,400,400i,700,700i"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "/*! minireset.css v0.0.5 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}",
            }}
          />
        </Head>
        <body>
          <noscript>This website runs best with JavaScript enabled</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
