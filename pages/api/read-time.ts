import { gql } from "graphql-request";
import { NextApiHandler } from "next";
import requestCms from "../../utils/requestCms";
import fetch from "isomorphic-unfetch";

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

  const { post } = await requestCms(mutation);
  return post;
};

const triggerDeploy = async () =>
  await fetch(process.env.VERCEL_DEPLOY_HOOK as string, {
    method: "POST",
  });

const ReadTime: NextApiHandler = async (req, res) => {
  // Check the secret and query parameters
  if (
    req.query.secret !== process.env.GRAPHCMS_MUTATION_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const postBody = await getPostBodyBySlug(req.query.slug as string);

  // If the slug doesn't exist, return error
  if (!postBody) return res.status(401).json({ message: "Invalid slug" });

  const readTime = calcReadTime(postBody);
  await postReadTimeBySlug(req.query.slug as string, Math.ceil(readTime));
  await triggerDeploy();

  // Close the response
  res.end();
};

export default ReadTime;
