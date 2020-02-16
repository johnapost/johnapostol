const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const summary = require("./static/posts/summary.json");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpg"]
      }
    ]
  ],
  {
    exportPathMap: () => {
      const posts = Object.entries(summary.fileMap).reduce(
        (accum, [key, { date, slug }]) => ({
          [`/post/${slug}`]: {
            page: "/post",
            query: {
              date,
              slug
            }
          }
        }),
        {}
      );

      return {
        "/": {
          page: "/"
        },
        ...posts
      };
    }
  }
);
