/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const summary = require("./content/summary.json");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["jpg"],
    },
  ],
  {
    exportPathMap: () => {
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
    },
    exportTrailingSlash: true,
  },
]);
