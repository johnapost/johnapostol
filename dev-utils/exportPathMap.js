/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require("isomorphic-unfetch");

const getLatestDate = (publishedAt, updatedAt) => {
  const publishDate = new Date(publishedAt);
  const updateDate = new Date(updatedAt);

  return new Date(publishDate).getTime() >= new Date(updateDate).getTime()
    ? publishDate
    : updateDate;
};

const gatherPosts = async () => {
  const {
    data: { posts },
  } = await fetch(process.env.GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        {
          posts(stage: PUBLISHED) {
            slug
            publishedAt
            updatedAt
          }
        }      
      `,
    }),
  }).then((res) => res.json());

  const formattedPosts = posts.reduce(
    (accum, { slug, publishedAt, updatedAt }) => ({
      ...accum,
      [`/post/${slug}`]: {
        page: "/post/[slug]",
        query: {
          modifiedDate: getLatestDate(publishedAt, updatedAt),
        },
      },
    }),
    {}
  );

  return formattedPosts;
};

const gatherTags = async () => {
  const {
    data: { tags },
  } = await fetch(process.env.GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        {
          tags(stage: PUBLISHED) {
            slug
            publishedAt
            updatedAt
          }
        }
      `,
    }),
  }).then((res) => res.json());

  const formattedTags = tags.reduce(
    (accum, { slug, publishedAt, updatedAt }) => ({
      ...accum,
      [`/tag/${slug}`]: {
        page: "/tag/[slug]",
        query: {
          modifiedDate: getLatestDate(publishedAt, updatedAt),
        },
      },
    }),
    {}
  );

  return formattedTags;
};

module.exports = async () => {
  return {
    "/": {
      page: "/",
    },
    "/about": {
      page: "/about",
    },
    "/about/manager": {
      page: "/about/manager",
    },
    ...(await gatherPosts()),
    ...(await gatherTags()),
  };
};
