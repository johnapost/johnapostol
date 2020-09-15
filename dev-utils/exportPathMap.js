/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const fetch = require("isomorphic-unfetch");

module.exports = async () => {
  const {
    data: { posts },
  } = await fetch(process.env.GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({ query: "{ posts { slug } }" }),
  }).then((res) => res.json());

  const formattedPosts = posts.reduce(
    (accum, { slug }) => ({
      ...accum,
      [`/post/${slug}`]: {
        page: "/post/[slug]",
      },
    }),
    {}
  );

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
    ...formattedPosts,
  };
};
