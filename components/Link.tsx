import React from "react";
import RepoCard from "./RepoCard";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: Props): React.JSX.Element => {
  const nodes = React.Children.toArray(children);
  const node = nodes[0] as React.ReactElement<{ children?: string }>;
  const rawText = node?.props?.children ?? "";

  if (typeof rawText === "string" && rawText.startsWith("repo")) {
    const preview = rawText.split("repo: ")[1];

    return <RepoCard preview={preview} href={href} />;
  }

  if (href.startsWith("/")) {
    return <a href={href}>{children}</a>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

export default Link;
