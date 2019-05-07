import Document, { Head, Html, Main, NextScript } from "next/document";
import GoogleAnalytics from "../components/GoogleAnalytics";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <Html lang="en">
        <Head>
          {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            padding-top: 5rem;
          }
        `}</style>
      </Html>
    );
  }
}
