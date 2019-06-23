import { NextContext, NextFunctionComponent } from "next";

import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";

interface IProps {
  post: string;
}

const Post: NextFunctionComponent<IProps> = ({ post }) => {
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
  // const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  // return {
  //   post: await (await fetch(`${baseUrl}/static/2019-05-07/post.json`)).json()
  // };
  return { post: null };
};

export default Post;
