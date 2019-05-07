import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import post from "../posts/2019-05-07.md";

export default () => (
  <Layout>
    <ReactMarkdown source={post} />
  </Layout>
);
