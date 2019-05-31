import ReactMarkdown from "react-markdown";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import post from "../posts/2019-05-07.md";

export default () => {
  const renderers = {
    heading: Heading,
    image: Image,
    paragraph: Paragraph
  };

  return (
    <Layout>
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
    </Layout>
  );
};
