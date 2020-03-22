import React from "react";

interface Props {
  children: JSX.Element[];
  href: string;
}

const Link = ({ children, href }: Props): JSX.Element => {
  const [node] = children;
  const {
    props: { children: rawText },
  } = node;

  if (rawText.startsWith("repo")) {
    const displayText = rawText.split("repo: ")[1];

    return (
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {displayText}
      </a>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

export default Link;
