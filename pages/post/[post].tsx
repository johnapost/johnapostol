import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
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
  hero: string;
  postBody: string;
  preview: string;
  readTime: number;
  slug: string;
  title: string;
}

const Post: NextPage<Props> = ({
  date,
  hero,
  postBody,
  preview,
  readTime,
  slug,
  title,
}: Props): React.JSX.Element => {
  const ImageWithContext = WithPostContext({ slug }, Image);

  const components = {
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <Blockquote>{children}</Blockquote>
    ),
    code: ({
      children,
      className,
      inline,
    }: {
      children?: React.ReactNode;
      className?: string;
      inline?: boolean;
    }) => {
      if (inline) return <InlineCode>{String(children)}</InlineCode>;
      return <CodeBlock className={className}>{String(children)}</CodeBlock>;
    },
    h1: ({ children }: { children?: React.ReactNode }) => (
      <Heading level={0}>{children}</Heading>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <Heading level={1}>{children}</Heading>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <Heading level={2}>{children}</Heading>
    ),
    img: ({ src, alt }: { src?: string | Blob; alt?: string }) => (
      <ImageWithContext
        src={typeof src === "string" ? src : ""}
        alt={alt ?? ""}
        context={{ slug }}
      />
    ),
    a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
      <Link href={href ?? ""}>{children}</Link>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <List>{children}</List>
    ),
    ol: ({ children }: { children?: React.ReactNode }) => (
      <List ordered>{children}</List>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
      <ListItem>{children}</ListItem>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
      <Paragraph>{children}</Paragraph>
    ),
    hr: () => <ThematicBreak />,
  };

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
          <ReactMarkdown components={components}>{postBody}</ReactMarkdown>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = gql`
    {
      posts(stage: PUBLISHED) {
        slug
      }
    }
  `;

  const { posts } = await requestCms(data);

  const paths = posts.map(({ slug }: { slug: string }) => ({
    params: { post: slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.post as string;
  const data = gql`
    {
      post(where: {slug: "${slug}"}) {
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
  const hero = `/static/${slug}/hero.jpg`;

  return { props: { title, preview, slug, postBody, date, readTime, hero } };
};

export default Post;
