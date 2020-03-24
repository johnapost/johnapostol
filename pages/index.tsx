import React from "react";
import { NextPage } from "next";
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
    <hr />
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

Index.getInitialProps = async (): Promise<Props> => {
  const summary: Summary = await import("../content/summary.json");
  const { sourceFileArray, fileMap } = summary;

  const recent = sourceFileArray.slice(-5).reverse();
  const posts = recent.map((sourceFile: string) => {
    const destFile = sourceFile
      .replace("posts/", "content/")
      .replace(".md", ".json");

    return fileMap[destFile];
  });

  return { posts };
};

export default Index;
