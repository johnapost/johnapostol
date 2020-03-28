import React from "react";
import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Cover from "../components/Cover";
import GitHub from "../components/GitHub";
import LinkedIn from "../components/LinkedIn";
import Medium from "../components/Medium";
import Paragraph from "../components/Paragraph";
import ColumnWrapper from "../components/ColumnWrapper";
import PostList, { Post } from "../components/PostList";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import ThematicBreak from "../components/ThematicBreak";
import { atLeastMedium } from "../utils/breakpoints";

type Props = {
  posts: Post[];
};

type Summary = {
  sourceFileArray: string[];
  fileMap: {
    [id: string]: Post;
  };
};

const Index: NextPage<Props> = ({ posts }: Props) => (
  <>
    <main role="main">
      <Head>
        <meta
          name="description"
          content="Thoughts and code from John Apostol, lifelong learner"
        />
        <title>John Apostol - lifelong learner</title>
        <link rel="canonical" href="https://johnapostol.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johnapostol.com" />
        <meta
          property="og:image"
          content={require("../public/static/me.jpg")}
        />
        <meta property="og:title" content="John Apostol - lifelong learner" />
        <meta
          property="og:description"
          content="Thoughts and code from John Apostol, lifelong learner"
        />
        <meta name="twitter:site" content="@johnapost" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Cover />
      <div className="grid">
        <ColumnWrapper>
          <div className="external">
            <a href="https://github.com/johnapost">
              <GitHub />
            </a>
            <a href="https://medium.com/@johnapost">
              <Medium />
            </a>
            <a href="https://www.linkedin.com/in/johnapost/">
              <LinkedIn />
            </a>
            <a>
              <Resume />
            </a>
          </div>
        </ColumnWrapper>
        <Paragraph>Hi there!</Paragraph>
        <Paragraph>
          I&apos;m a software person living in Austin, Texas. I tend to spend my
          time playing with code and writing about software development.
        </Paragraph>
        <Paragraph>
          Above all, I love working with brilliant, collaborative people who can
          balance idealism with pragmatism.
        </Paragraph>
        <ThematicBreak />
        <PostList posts={posts} />
      </div>
    </main>
    <Footer />
    <style jsx>{`
      main {
        margin: 0 0 6rem;
        overflow-x: hidden;
      }

      .external {
        color: #362640;
        display: flex;
        margin: 2rem 0 0;
      }

      a {
        display: inline-block;
      }

      .external a + a {
        margin-left: 10px;
      }

      .grid {
        font-family: "Merriweather", serif;
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
  const summary: Summary = await import("../content/summary.json");
  const { sourceFileArray, fileMap } = summary;

  const recent = sourceFileArray.slice(-5).reverse();
  const posts = recent.map((sourceFile: string) => {
    const destFile = sourceFile
      .replace("posts/", "content/")
      .replace(".md", ".json");

    return fileMap[destFile];
  });

  return { props: { posts } };
};

export default Index;
