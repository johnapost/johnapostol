import React from "react";
import RepoCard from "./RepoCard";

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
    const preview = rawText.split("repo: ")[1];

    return <RepoCard preview={preview} href={href} />;
  }

  if (href.startsWith("/post/")) {
    return <a href={href}>{children}</a>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

export default Link;
