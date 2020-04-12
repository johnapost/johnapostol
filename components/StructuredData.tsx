import React from "react";

interface Props {
  date: string;
  title: string;
  hero: string;
  preview: string;
}

const StructuredData = ({ date, title, hero, preview }: Props): JSX.Element => {
  const data = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    publisher: {
      "@type": "Organization",
      name: "John Apostol",
      url: "https://johnapostol.com",
      logo: {
        "@type": "ImageObject",
        url: require("../public/static/me.jpg"),
      },
    },
    author: {
      "@type": "Person",
      name: "John Apostol",
      url: "https://johnapostol.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://google.com/article",
    },
    headline: title,
    image: hero,
    datePublished: date,
    dateModified: date,
    description: preview,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    />
  );
};

export default StructuredData;
