import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import Paragraph from "../../components/Paragraph";
import { atLeastMedium } from "../../utils/breakpoints";
import ExternalLinks from "../../components/ExternalLinks";

const Manager: NextPage = () => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <title>About John Apostol</title>
        <link rel="canonical" href="https://johnapostol.com/about/manager" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://johnapostol.com/about/manager"
        />
        <meta
          property="og:image"
          content={require("../../public/static/me.jpg?size=320")}
        />
        <meta property="og:title" content="About John Apostol" />
        <meta
          property="og:description"
          content="John Apostol is a lifelong learner and software person based in Austin, TX."
        />
        <meta name="twitter:site" content="@johnapost" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Cover />
      <div className="grid">
        <ExternalLinks />
        <Paragraph>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Paragraph>
      </div>
    </main>
    <Footer />
    <style jsx>{`
      main {
        font-family: "Merriweather", serif;
        margin: 0 0 6rem;
        min-width: 320px;
        overflow-x: hidden;
      }

      @media ${atLeastMedium} {
        .grid {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }

        .grid:before {
          content: "";
        }
      }
    `}</style>
  </>
);

export default Manager;
