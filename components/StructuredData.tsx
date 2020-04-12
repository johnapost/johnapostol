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
    author: {
      "@type": "Person",
      name: "John Apostol",
    },
    headline: title,
    image: [hero],
    datePublished: date,
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
