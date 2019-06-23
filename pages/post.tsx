import fetch from "isomorphic-unfetch";
import { NextContext } from "next";
import ReactMarkdown from "react-markdown";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";

interface IProps {
  post: string;
}

const Post = ({ post }: IProps) => {
  const renderers = {
    heading: Heading,
    image: Image,
    paragraph: Paragraph
  };

  return (
    <main role="main">
      <article>
        <ReactMarkdown source={post} renderers={renderers} />
      </article>
      <style jsx>{`
        article {
          font-family: "Merriweather", serif;
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }
      `}</style>
    </main>
  );
};

Post.getInitialProps = async ({ req }: NextContext) => {
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
  const post = (await (await fetch(
    `${baseUrl}/static/posts/2019-05-07.json`
  )).json()).bodyContent;

  return {
    post
  };
};

export default Post;
