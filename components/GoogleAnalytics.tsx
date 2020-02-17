import React from "react";

const GoogleAnalytics = (): JSX.Element => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-139721576-1"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-139721576-1');
        `
      }}
    />
  </>
);

export default GoogleAnalytics;
