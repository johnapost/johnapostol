/* eslint-disable @typescript-eslint/no-var-requires */
/* Original Author: Joran Quinten */

const fs = require("fs");
require("dotenv").config();

// Read from the static map that's provided by next
const exportPathMap = require("./exportPathMap");

// Priority is determined by path depth. Feel free to modify this if needed:
const getPriority = (url) =>
  ((100 - (url.split("/").length - 2) * 10) / 100).toFixed(2);

// Set the header
const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

// Wrap all pages in <urlset> tags
const xmlUrlWrapper = (nodes) => `${xmlHeader}
  ${nodes}
</urlset>`;

// Determine and return the nodes for every page
const xmlUrlNode = (domain, pageUrl, lastmod) => {
  const loc = pageUrl === "/" ? domain : `${domain}${pageUrl}`;
  const priority = getPriority(pageUrl);

  return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>
</url>`;
};

const generateSitemap = async (domain, targetFolder) => {
  if (!domain) {
    throw new Error("No domain provided!");
  }
  if (!targetFolder) {
    throw new Error("No targetFolder provided!");
  }
  const fileName = "sitemap.xml";
  const writeLocation = `${
    targetFolder.endsWith("/") ? targetFolder : `${targetFolder}/`
  }${fileName}`;

  const pathMap = await exportPathMap();
  const pages = Object.entries(pathMap);

  const sitemap = `${xmlUrlWrapper(
    pages.map(([page, pageObject]) => {
      const modifiedDate = (
        (pageObject && pageObject.query && pageObject.query.modifiedDate) ||
        new Date()
      ).toISOString();
      return xmlUrlNode(domain, page, modifiedDate);
    }).join(`
`)
  )}`;

  fs.writeFile(`${writeLocation}`, sitemap, (err) => {
    if (err) throw err;
    console.log(
      `sitemap.xml with ${pages.length} entries was written to ${targetFolder}/${fileName}`
    );
  });
};

generateSitemap("https://johnapostol.com", "./public");
