import fetch from "isomorphic-unfetch";
import { NextContext } from "next";
import Cover from "../components/Cover";
import GitHub from "../components/GitHub";
import LinkedIn from "../components/LinkedIn";
import Medium from "../components/Medium";
import Paragraph from "../components/Paragraph";
import PostList, { IPost } from "../components/PostList";
import Resume from "../components/Resume";

interface IProps {
  posts: IPost[];
}

const Index = ({ posts }: IProps) => (
  <main role="main">
    <Cover />
    <div className="intro">
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
      <Paragraph>Hi there!</Paragraph>
      <Paragraph>
        I'm a software person in Austin, Texas. I mostly write web apps, but I
        also write about writing code. This is where I put those writings.
      </Paragraph>
    </div>
    <hr />
    <PostList posts={posts} />
    <style jsx>{`
      .external {
        color: #362640;
        display: flex;
        justify-content: center;
        margin: 1rem 0 0;
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

Index.getInitialProps = async ({ req }: NextContext) => {
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
  const { sourceFileArray, fileMap } = await (await fetch(
    `${baseUrl}/static/posts/summary.json`
  )).json();

  const recent = sourceFileArray.slice(-5).reverse();
  const posts = recent.map((sourceFile: string) => {
    const destFile = sourceFile
      .replace("posts/", "static/posts/")
      .replace(".md", ".json");

    return fileMap[destFile];
  });

  return { posts };
};

export default Index;
