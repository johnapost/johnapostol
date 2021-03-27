import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import { gql } from "graphql-request";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import PostList, { Post } from "../../components/PostList";
import { atLeastMedium } from "../../utils/breakpoints";
import ExternalLinks from "../../components/ExternalLinks";
import query from "../../utils/query";

interface Props {
  posts: Post[];
  tag: string;
}

const Tag = ({ posts, tag }: Props): JSX.Element => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content={`John Apostol's posts about ${tag}`}
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
        <PostList posts={posts} />
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

// Currently impossible to query Tags, I need to create a model with a many:many relationship with Post

Tag.getInitialProps = async ({ asPath }: NextPageContext): Promise<Props> => {
  // Grab ID
  const tag = asPath?.split("/tag/")[1].split("?")[0] as string;
  const data = gql`
    {
      post(where: {slug: "${tag}"}, orderBy: date_DESC, stage: PUBLISHED ) {
        date
        preview
        slug
        tags
        title
      }
    }
  `;

  const { posts } = await query(data);
  return { posts, tag };
};

export default Tag;
