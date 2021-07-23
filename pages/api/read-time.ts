import { gql } from "graphql-request";
import { NextApiHandler } from "next";
import requestCms from "../../utils/requestCms";
import fetch from "isomorphic-unfetch";

const calcReadTime = (postBody: string): number => {
  // Remove new lines, count words, and get count of words
  const words = postBody.replace(/\n/gm, "").trim().split(/\s+/).length;

  // Divide by 265 and round up for readTime in minutes
  return Math.ceil(words / 265);
};

const getPostBody = async (slug: string): Promise<string> => {
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

const updateReadTime = async (slug: string, readTime: number) => {
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

const triggerDeploy = async () =>
  await fetch(process.env.VERCEL_DEPLOY_HOOK as string, {
    method: "POST",
  });

const ReadTime: NextApiHandler = async (req, res) => {
  // Check data payload
  const {
    data: { slug },
  } = req.body;

  const postBody = await getPostBody(slug);

  // If the slug doesn't exist, return error
  if (!postBody) return res.status(401).json({ message: "Invalid slug" });

  const readTime = calcReadTime(postBody);

  // Update readTime, publish and deploy
  await updateReadTime(slug, readTime);
  await publish(slug);
  await triggerDeploy();

  // Close the response
  res.end();
};

export default ReadTime;
