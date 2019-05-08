import ReactMarkdown from "react-markdown";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import post from "../posts/2019-05-07.md";

const renderers = {
  heading: Heading,
  paragraph: Paragraph
};

export default () => (
  <Layout>
    <article>
      <div className="md-wrapper">
        <ReactMarkdown source={post} renderers={renderers} />
      </div>
    </article>
    <style jsx>{`
      article {
        display: grid;
        grid-template-columns: 1fr 740px 1fr;
      }

      article > * {
        grid-column: 2;
      }

      .md-wrapper {
        padding: 0 20px;
      }
    `}</style>
  </Layout>
);
