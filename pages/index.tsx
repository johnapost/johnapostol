import React from "react";
import { NextPage } from "next";
import Cover from "../components/Cover";
import GitHub from "../components/GitHub";
import LinkedIn from "../components/LinkedIn";
import Medium from "../components/Medium";
import Paragraph from "../components/Paragraph";
import ColumnWrapper from "../components/ColumnWrapper";
import { Post } from "../components/PostList";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

type Props = {
  posts: Post[];
};

type Summary = {
  sourceFileArray: string[];
  fileMap: {
    [id: string]: Post;
  };
};

const Index: NextPage<Props> = () => (
  <main role="main">
    <Cover />
    <div className="intro">
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
    </div>
    <hr />
    <Footer />
    <style jsx>{`
      main {
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

      .intro {
        font-family: "Merriweather", serif;
      }

      hr {
        background-image: linear-gradient(
          to right,
          transparent,
          #362640,
          transparent
        );
        border: 0;
        height: 2px;
        margin: 3rem auto;
        width: 80%;
      }

      @media (min-width: 900px) {
        .intro {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }

        .intro:before {
          content: "";
        }
      }
    `}</style>
  </main>
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
