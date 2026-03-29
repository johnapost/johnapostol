import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { gql } from "graphql-request";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import ExternalLinks from "../../components/ExternalLinks";
import requestCms from "../../utils/requestCms";
import PostList, { Post } from "../../components/PostList";
import ThematicBreak from "../../components/ThematicBreak";
import Heading from "../../components/Heading";
import { atLeastMedium } from "../../utils/breakpoints";
import calcReadTime from "../../utils/calcReadTime";

interface Props {
  displayName: string;
  posts: Post[];
  slug: string;
}

const Tag: NextPage<Props> = ({
  displayName,
  posts,
  slug,
}: Props): React.JSX.Element => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content={`John Apostol's posts about ${displayName}.`}
        />
        <title>{displayName} | John Apostol</title>
        <link rel="canonical" href={`https://johnapostol.com/tag/${slug}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://johnapostol.com/tag/${slug}`}
        />
        <meta
          property="og:image"
          content="https://johnapostol.com/static/me.jpg"
        />
        <meta property="og:title" content={`${displayName} | John Apostol`} />
        <meta
          property="og:description"
          content={`John Apostol's posts about ${displayName}.`}
        />
        <meta name="twitter:site" content="@johnapost" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Cover image="/static/about.jpg" />
      <div className="grid">
        <ExternalLinks />
        <Heading level={0}>{`Posts about ${displayName}`}</Heading>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = gql`
    {
      tags(stage: PUBLISHED) {
        slug
      }
    }
  `;

  const { tags } = await requestCms(data);

  const paths = tags.map(({ slug }: { slug: string }) => ({
    params: { tag: slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.tag as string;
  const data = gql`
    {
      posts(
        where: {tags_some: {slug: "${slug}"}},
        orderBy: date_DESC,
        stage: PUBLISHED
      ) {
        date
        postBody
        preview
        slug
        tags {
          displayName
          slug
        }
        title
      }
      tag(where: {slug: "${slug}"}) {
        displayName
      }
    }
  `;

  const {
    posts,
    tag: { displayName },
  } = await requestCms(data);

  const postsWithReadTime = posts.map((post: Post) => ({
    ...post,
    readTime: calcReadTime(post.postBody),
  }));

  return { props: { displayName, slug, posts: postsWithReadTime } };
};

export default Tag;
