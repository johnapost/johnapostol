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
        <style jsx global>{`
          /* minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
          html,
          body,
          p,
          ol,
          ul,
          li,
          dl,
          dt,
          dd,
          blockquote,
          figure,
          fieldset,
          legend,
          textarea,
          pre,
          iframe,
          hr,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
            padding: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 100%;
            font-weight: normal;
          }
          ul {
            list-style: none;
          }
          button,
          input,
          select,
          textarea {
            margin: 0;
          }
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          img,
          embed,
          iframe,
          object,
          audio,
          video {
            height: auto;
            max-width: 100%;
          }
          iframe {
            border: 0;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          td,
          th {
            padding: 0;
            text-align: left;
          }
        `}</style>
        <style jsx global>{`
          body {
            padding-top: 5rem;
          }
        `}</style>
      </Html>
    );
  }
}
