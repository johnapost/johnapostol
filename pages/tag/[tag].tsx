import React from "react";
import { GetStaticProps, NextPageContext } from "next";
import Head from "next/head";
import { gql } from "graphql-request";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import { atLeastMedium } from "../../utils/breakpoints";
import ExternalLinks from "../../components/ExternalLinks";
import query from "../../utils/query";
import ColumnWrapper from "../../components/ColumnWrapper";
import PostList, { Post } from "../../components/PostList";
import ThematicBreak from "../../components/ThematicBreak";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";

interface Props {
  displayName: string;
  posts: Post[];
  slug: string;
}

const Tag = ({ displayName, posts }: Props): JSX.Element => (
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
        <Heading level={1}>{`Posts about ${displayName}`}</Heading>
        <ThematicBreak />
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

Tag.getInitialProps = async ({ asPath }: NextPageContext): Promise<Props> => {
  const slug = asPath?.split("/tag/")[1].split("?")[0] as string;
  const data = gql`
    {
      posts(
        where: {tags_some: {slug: "${slug}"}},
        orderBy: date_DESC,
        first: 5,
        stage: DRAFT
      ) {
        date
        preview
        slug
        tags {
          displayName
          slug
        }
        title
      }
      tag(where: {slug: "javascript"}) {
        displayName
      }
    }
  `;

  const {
    posts,
    tag: { displayName },
  } = await query(data);
  return { displayName, slug, posts };
};

export default Tag;
