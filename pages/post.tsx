import React from "react";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import ThematicBreak from "../components/ThematicBreak";
import Blockquote from "../components/Blockquote";
import PostHeading from "../components/PostHeading";

interface Props {
  postBody: string;
  date: string;
  title: string;
}

const Post: NextPage<Props> = ({ postBody, date, title }: Props) => {
  const renderers = {
    blockquote: Blockquote,
    heading: Heading,
    image: Image,
    paragraph: Paragraph,
    thematicBreak: ThematicBreak
  };

  return (
    <main role="main">
      <article>
        <PostHeading date={date} title={title} />
        <ReactMarkdown source={postBody} renderers={renderers} />
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

Post.getInitialProps = async ({
  query: { date: queryDate }
}): Promise<Props> => {
  const { bodyContent, date, title } = await import(
    `../content/${queryDate}.json`
  );

  return { postBody: bodyContent, date, title };
};

export default Post;
