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

const getPostBody = async (id: string): Promise<string> => {
  const data = gql`
    {
      post(where: { id: "${id}" }, stage: PUBLISHED) {
        postBody
      }
    }
  `;

  const {
    post: { postBody },
  } = await requestCms(data);
  return postBody;
};

const updateReadTime = async (id: string, readTime: number) => {
  const mutation = gql`
    mutation {
      updatePost(
        where: { id: "${id}" }
        data: { readTime: ${readTime} }
      ) {
        readTime
      }
    }
  `;

  await requestCms(mutation);
};

const publish = async (id: string) => {
  const mutation = gql`
    mutation {
      publishPost(where: { id: "${id}" }) {
        id
      }
    }
  `;

  await requestCms(mutation);
};

const triggerDeploy = async () =>
  await fetch(process.env.VERCEL_DEPLOY_HOOK as string, {
    method: "POST",
  });

const ReadTime: NextApiHandler = async (req, res) => {
  // Check data payload
  const {
    data: { id },
  } = req.body;

  const postBody = await getPostBody(id);

  // If the id doesn't exist, return error
  if (!postBody) return res.status(401).json({ message: "Invalid ID" });

  const readTime = calcReadTime(postBody);

  // Update readTime, publish and deploy
  await updateReadTime(id, readTime);
  await publish(id);
  await triggerDeploy();

  // Close the response
  res.end();
};

export default ReadTime;
