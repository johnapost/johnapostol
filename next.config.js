/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const exportPathMap = require("./dev-utils/exportPathMap");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["jpg"],
      mozjpeg: {
        quality: 90,
      },
      optimizeImagesInDev: true,
      responsive: {
        sizes: [320, 740, 900, 1600],
      },
    },
  ],
  {
    exportPathMap,
    exportTrailingSlash: true,
  },
]);
