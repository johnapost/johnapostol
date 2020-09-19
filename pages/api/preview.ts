import { gql } from "graphql-request";
import { NextApiHandler } from "next";
import query from "../../utils/query";

const getPreviewPostBySlug = async (slug: string) => {
  const data = gql`
    {
      post(where: { slug: "${slug}" }, stage: DRAFT) {
        slug
      }
    }
  `;

  const { post } = await query(data);
  return post;
};

const Preview: NextApiHandler = async (req, res) => {
  // Check the secret and next parameters
  if (
    req.query.secret !== process.env.GRAPHCMS_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const { slug: postSlug } = await getPreviewPostBySlug(
    req.query.slug as string
  );

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!postSlug) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable preview mode
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/post/${postSlug}` });

  // Close the response
  res.end();
};

export default Preview;
