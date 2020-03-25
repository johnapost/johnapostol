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
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context);
    const styles = flush();
    return { ...initialProps, styles };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {this.props.styles}
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
