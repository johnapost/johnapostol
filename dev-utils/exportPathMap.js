/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const { GraphQLClient, gql } = require("graphql-request");

module.exports = async () => {
  const graphQLClient = new GraphQLClient(
    "https://api-us-west-2.graphcms.com/v2/ckf1dpkdn8os901zc4d4mcizm/master"
  );
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  const { posts } = await graphQLClient.request(query);
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
