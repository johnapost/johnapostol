import React from "react";
import { NextPageContext } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Paragraph from "../../components/Paragraph";
import ThematicBreak from "../../components/ThematicBreak";
import Blockquote from "../../components/Blockquote";
import PostHeading from "../../components/PostHeading";
import Footer from "../../components/Footer";
import WithPostContext from "../../components/WithPostContext";
import CodeBlock from "../../components/CodeBlock";
import { atLeastSmall } from "../../utils/breakpoints";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import InlineCode from "../../components/InlineCode";
import Link from "../../components/Link";
import StructuredData from "../../components/StructuredData";
import { gql } from "graphql-request";
import requestCms from "../../utils/requestCms";
import calcReadTime from "../../utils/calcReadTime";

interface Props {
  date: string;
  postBody: string;
  preview: string;
  readTime: number;
  slug: string;
  title: string;
}

const Post = ({
  date,
  postBody,
  preview,
  readTime,
  slug,
  title,
}: Props): JSX.Element => {
  const renderers = {
    blockquote: Blockquote,
    code: CodeBlock,
    heading: Heading,
    inlineCode: InlineCode,
    image: WithPostContext({ slug }, Image),
    link: Link,
    list: List,
    listItem: ListItem,
    paragraph: Paragraph,
    thematicBreak: ThematicBreak,
  };

  let hero = "";

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    hero = require(`../../public/static/${slug}/hero.jpg`);
  } catch {}

  return (
    <>
      <main role="main">
        <Head>
          <meta name="description" content={preview} />
          <title>{title} | John Apostol</title>
          <link rel="canonical" href={`https://johnapostol.com/post/${slug}`} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://johnapostol.com/post/${slug}`}
          />
          <meta property="og:image" content={hero} />
          <meta property="og:title" content={`${title} | John Apostol`} />
          <meta property="og:description" content={preview} />
          <meta name="twitter:site" content="@johnapost" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <StructuredData
          date={date}
          title={title}
          hero={hero}
          preview={preview}
        />
        <article>
          <PostHeading date={date} title={title} readTime={readTime} />
          <ReactMarkdown source={postBody} renderers={renderers} />
        </article>
      </main>
      <Footer />
      <style jsx>{`
        main {
          margin: 3rem 0 6rem;
          min-width: 320px;
          overflow-x: hidden;
        }

        article {
          display: block;
          font-family: "Merriweather", serif;
          font-size: 1.1rem;
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

Post.getInitialProps = async ({ asPath }: NextPageContext): Promise<Props> => {
  const slug = asPath?.split("/post/")[1].split("?")[0] as string;
  const data = gql`
    {
      post(where: {slug: "${slug}"} ) {
        date
        postBody
        preview
        title
      }
    }
  `;

  const {
    post: { title, preview, postBody, date },
  } = await requestCms(data);

  const readTime = calcReadTime(postBody);

  return { title, preview, slug, postBody, date, readTime };
};

export default Post;
