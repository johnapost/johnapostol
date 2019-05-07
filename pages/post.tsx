import ReactMarkdown from "react-markdown";
import post from "../posts/2019-05-07.md";

export default () => (
  <div>
    {process.env.NODE_ENV}
    <ReactMarkdown source={post} />
  </div>
);
