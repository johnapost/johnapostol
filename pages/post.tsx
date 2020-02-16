import { NextPageContext } from "next";
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

Post.getInitialProps = async ({ query: { date } }: NextPageContext) => {
  const post = (await import(`../content/${date}.json`)).bodyContent;

  return { post };
};

export default Post;
