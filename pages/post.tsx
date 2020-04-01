import React from "react";
import { NextPage } from "next";
import Head from "next/head";
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
import List from "../components/List";
import ListItem from "../components/ListItem";
import InlineCode from "../components/InlineCode";
import Link from "../components/Link";

interface Props {
  date: string;
  postBody: string;
  preview: string;
  slug: string;
  title: string;
}

const Post: NextPage<Props> = ({
  date,
  postBody,
  preview,
  slug,
  title,
}: Props): JSX.Element => {
  const renderers = {
    blockquote: Blockquote,
    code: CodeBlock,
    heading: Heading,
    inlineCode: InlineCode,
    image: WithPostContext({ slug, date }, Image),
    link: Link,
    list: List,
    listItem: ListItem,
    paragraph: Paragraph,
    thematicBreak: ThematicBreak,
  };

  return (
    <>
      <main role="main">
        <Head>
          <meta name="description" content={preview} />
          <title>John Apostol - {title}</title>
          <link
            rel="canonical"
            href={`https://johnapostol.com/post/${slug}/`}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://johnapostol.com/post/${slug}/`}
          />
          <meta
            property="og:image"
            content={require(`../public/static/${date}/hero.jpg`)}
          />
          <meta property="og:title" content={`John Apostol - ${title}`} />
          <meta property="og:description" content={preview} />
          <meta name="twitter:site" content="@johnapost" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <article>
          <PostHeading date={date} title={title} />
          <ReactMarkdown source={postBody} renderers={renderers} />
        </article>
      </main>
      <Footer />
      <style jsx>{`
        main {
          margin: 3rem 0 6rem;
          overflow-x: hidden;
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
  query: { date, preview, slug },
}): Promise<Props> => {
  const { bodyContent, title } = await import(`../content/${date}.json`);

  return {
    date: date as string,
    postBody: bodyContent,
    preview: preview as string,
    slug: slug as string,
    title,
  };
};

export default Post;
