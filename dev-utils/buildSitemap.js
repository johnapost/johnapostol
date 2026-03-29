/* eslint-disable @typescript-eslint/no-var-requires */
/* Original Author: Joran Quinten */

const fs = require("fs");
require("dotenv").config();

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

const cmsQuery = async (query) => {
  const res = await fetch(process.env.GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });
  const { data } = await res.json();
  return data;
};

const buildPathMap = async () => {
  const { posts } = await cmsQuery(`
    {
      posts(stage: PUBLISHED) {
        slug
        publishedAt
        updatedAt
      }
    }
  `);

  const { tags } = await cmsQuery(`
    {
      tags(stage: PUBLISHED) {
        slug
        publishedAt
        updatedAt
      }
    }
  `);

  const staticPages = {
    "/": { modifiedDate: new Date() },
    "/about": { modifiedDate: new Date() },
    "/about/manager": { modifiedDate: new Date() },
  };

  const postPages = posts.reduce((acc, { slug, publishedAt, updatedAt }) => {
    const publishDate = new Date(publishedAt);
    const updateDate = new Date(updatedAt);
    const modifiedDate =
      publishDate.getTime() >= updateDate.getTime() ? publishDate : updateDate;
    return { ...acc, [`/post/${slug}`]: { modifiedDate } };
  }, {});

  const tagPages = tags.reduce((acc, { slug, publishedAt, updatedAt }) => {
    const publishDate = new Date(publishedAt);
    const updateDate = new Date(updatedAt);
    const modifiedDate =
      publishDate.getTime() >= updateDate.getTime() ? publishDate : updateDate;
    return { ...acc, [`/tag/${slug}`]: { modifiedDate } };
  }, {});

  return { ...staticPages, ...postPages, ...tagPages };
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

  const pathMap = await buildPathMap();
  const pages = Object.entries(pathMap);

  const sitemap = `${xmlUrlWrapper(
    pagesxmlUrlNode(domain, page, modifiedDate.toISOString()),
  ).join(`
`),

  fs.writeFile(`${writeLocation}`, sitemap, (err) => {
    if (err) throw err;
    console.log(
      `sitemap.xml with ${pages.length} entries was written to ${targetFolder}/${fileName}`,
    );
  });
};

generateSitemap("https://johnapostol.com", "./public");
