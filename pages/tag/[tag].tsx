import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import { gql } from "graphql-request";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import { atLeastMedium } from "../../utils/breakpoints";
import ExternalLinks from "../../components/ExternalLinks";
import query from "../../utils/query";

interface Props {
  displayName: string;
  slug: string;
}

const Tag = ({ displayName, slug }: Props): JSX.Element => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content={`John Apostol's posts about ${displayName}`}
        />
        <title>About John Apostol</title>
        <link rel="canonical" href="https://johnapostol.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johnapostol.com/about" />
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
      <Cover image={require("../../public/static/about.jpg?size=320")} />
      <div className="grid">
        <ExternalLinks />
        {displayName}
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

Tag.getInitialProps = async ({ asPath }: NextPageContext): Promise<Props> => {
  // Grab ID
  const slug = asPath?.split("/tag/")[1].split("?")[0] as string;
  const data = gql`
    {
      tag(where: {slug: "${slug}"}) {
        displayName
      }
    }
  `;

  const {
    tag: { displayName },
  } = await query(data);
  return { displayName, slug };
};

export default Tag;
