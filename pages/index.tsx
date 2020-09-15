import React from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Cover from "../components/Cover";
import Paragraph from "../components/Paragraph";
import PostList, { Post } from "../components/PostList";
import Footer from "../components/Footer";
import ThematicBreak from "../components/ThematicBreak";
import { atLeastMedium } from "../utils/breakpoints";
import ExternalLinks from "../components/ExternalLinks";
import { GraphQLClient, gql } from "graphql-request";

type Props = {
  posts: Post[];
};

const Index: NextPage<Props> = ({ posts }: Props) => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content="Thoughts and code from John Apostol, lifelong learner"
        />
        <title>John Apostol, lifelong learner</title>
        <link rel="canonical" href="https://johnapostol.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johnapostol.com" />
        <meta
          property="og:image"
          content={require("../public/static/me.jpg?size=320")}
        />
        <meta property="og:title" content="John Apostol, lifelong learner" />
        <meta
          property="og:description"
          content="Thoughts and code from John Apostol, lifelong learner"
        />
        <meta name="twitter:site" content="@johnapost" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Cover />
      <div className="grid">
        <ExternalLinks />
        <Paragraph>Hi there!</Paragraph>
        <Paragraph>
          I&rsquo;m a software person living in Austin, Texas. I tend to spend
          my time playing with code and writing about software development.
        </Paragraph>
        <Paragraph>
          Above all, I love working with brilliant, collaborative people who can
          balance idealism with pragmatism.
        </Paragraph>
        <Paragraph>
          <Link href="/about">
            <a data-cy="about">Read more about me.</a>
          </Link>
        </Paragraph>
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

export const getStaticProps: GetStaticProps = async () => {
  const graphQLClient = new GraphQLClient(
    "https://api-us-west-2.graphcms.com/v2/ckf1dpkdn8os901zc4d4mcizm/master"
  );
  const query = gql`
    {
      posts {
        date
        preview
        slug
        tags
        title
      }
    }
  `;

  const { posts } = await graphQLClient.request(query);
  return { props: { posts } };
};

export default Index;
