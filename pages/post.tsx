import React from "react";
import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import ThematicBreak from "../components/ThematicBreak";
import Blockquote from "../components/Blockquote";
import PostHeading from "../components/PostHeading";
import Footer from "../components/Footer";
import WithPostContext from "../components/WithPostContext";
import CodeBlock from "../components/CodeBlock";
import { atLeastSmall } from "../utils/breakpoints";

interface Props {
  postBody: string;
  date: string;
  slug: string;
  title: string;
}

const Post: NextPage<Props> = ({
  date,
  postBody,
  slug,
  title
}: Props): JSX.Element => {
  const renderers = {
    blockquote: Blockquote,
    code: CodeBlock,
    heading: Heading,
    image: WithPostContext({ slug, date }, Image),
    paragraph: Paragraph,
    thematicBreak: ThematicBreak
  };

  return (
    <>
      <main role="main">
        <article>
          <PostHeading date={date} title={title} />
          <ReactMarkdown source={postBody} renderers={renderers} />
        </article>
      </main>
      <hr />
      <Footer />
      <style jsx>{`
        main {
          margin: 3rem 0 10rem;
        }

        article {
          font-family: "Merriweather", serif;
          display: block;
        }

        @media ${atLeastSmall} {
          article {
            display: grid;
            grid-template-columns: 1fr 740px 1fr;
          }
        }
      `}</style>
    </>
  );
};

Post.getInitialProps = async ({
  query: { date: postDate, slug }
}): Promise<Props> => {
  const { bodyContent, date, title } = await import(
    `../content/${postDate}.json`
  );

  return { postBody: bodyContent, date, title, slug: slug as string };
};

export default Post;
