import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";

const About: NextPage = () => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <title>About John Apostol</title>
        <link rel="canonical" href="https://johnapostol.com/about/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johnapostol.com/about/" />
        <meta
          property="og:image"
          content={require("../public/static/me.jpg?size=320")}
        />
        <meta property="og:title" content="About John Apostol" />
        <meta
          property="og:description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <meta name="twitter:site" content="@johnapost" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="grid">
        <Paragraph>About John Apostol</Paragraph>
      </div>
    </main>
    <Footer />
    <style jsx>{`
      main {
        margin: 0 0 6rem;
        min-width: 320px;
        overflow-x: hidden;
      }
    `}</style>
  </>
);

export default About;
