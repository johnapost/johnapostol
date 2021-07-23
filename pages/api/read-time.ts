import { gql } from "graphql-request";
import { NextApiHandler } from "next";
import requestCms from "../../utils/requestCms";

const calcReadTime = (postBody: string): number => {
  // Remove new lines, count words, and get count of words
  const words = postBody.replace(/\n/gm, "").trim().split(/\s+/).length;

  // Divide by 265 for readTime
  return words / 265;
};

const getPostBodyBySlug = async (slug: string): Promise<string> => {
  const data = gql`
    {
      post(where: { slug: "${slug}" }, stage: PUBLISHED) {
        postBody
      }
    }
  `;

  const {
    post: { postBody },
  } = await requestCms(data);
  return postBody;
};

const postReadTimeBySlug = async (slug: string, readTime: number) => {
  const mutation = gql`
    mutation {
      updatePost(
        where: { slug: "${slug}" }
        data: { readTime: ${readTime} }
      ) {
        readTime
      }
    }
  `;

  const {
    updatePost: { id },
  } = await requestCms(mutation);
  return id;
};

const publish = async (slug: string): Promise<string> => {
  const mutation = gql`
    mutation {
      publishPost(where: { slug: "${slug}" }) {
        id
      }
    }
  `;

  const {
    publishPost: { id },
  } = await requestCms(mutation);
  return id;
};

const ReadTime: NextApiHandler = async (req, res) => {
  // Check data payload
  const {
    data: { slug },
  } = req.body;

  const postBody = await getPostBodyBySlug(slug);

  // If the slug doesn't exist, return error
  if (!postBody) return res.status(401).json({ message: "Invalid slug" });

  const readTime = calcReadTime(postBody);
  await postReadTimeBySlug(slug, Math.ceil(readTime));
  await publish(slug);

  // Close the response
  res.end();
};

export default ReadTime;
