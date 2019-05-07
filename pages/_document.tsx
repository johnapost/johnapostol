import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <Html lang="en">
        <Head />
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
