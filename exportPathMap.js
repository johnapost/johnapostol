/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const summary = require("./content/summary.json");

module.exports = () => {
  const posts = Object.entries(summary.fileMap).reduce(
    (accum, [, { date, preview, slug }]) => ({
      ...accum,
      [`/post/${slug}/`]: {
        page: "/post",
        query: {
          date,
          preview,
          slug,
        },
      },
    }),
    {}
  );

  return {
    "/": {
      page: "/",
    },
    ...posts,
  };
};
