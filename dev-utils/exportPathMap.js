/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const summary = require("../content/summary.json");
const fileToDate = require("../utils/fileToDate");

module.exports = () => {
  const posts = Object.entries(summary.fileMap).reduce(
    (accum, [filePath, { preview, slug }]) => ({
      ...accum,
      [`/post/${slug}/`]: {
        page: "/post",
        query: {
          date: fileToDate(filePath),
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
