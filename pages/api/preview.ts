import { gql } from "graphql-request";
import { NextApiHandler } from "next";
import query from "../../utils/query";

const getPreviewPostBySlug = async (slug: string) => {
  const data = gql`
    {
      post(where: { slug: "${slug}" }, stage: "DRAFT") {
        slug
      }
    }
  `;

  const { post } = await query(data);
  return post;
};

const Preview: NextApiHandler = async (
  { query: { secret, slug } },
  { end, setPreviewData, status, writeHead }
) => {
  // Check the secret and next parameters
  if (secret !== process.env.GRAPHCMS_PREVIEW_SECRET || !slug) {
    return status(401).json({ message: "Invalid token" });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const { slug: postSlug } = await getPreviewPostBySlug(slug as string);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!postSlug) {
    return status(401).json({ message: "Invalid slug" });
  }

  // Enable preview mode
  setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  writeHead(307, { Location: `/posts/${postSlug}` });

  end();
};

export default Preview;
