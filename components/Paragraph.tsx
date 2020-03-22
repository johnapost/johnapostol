import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: JSX.Element[] | string;
  noWrap?: boolean;
}

const Paragraph = ({ children, noWrap }: Props): JSX.Element => {
  const [firstChild] = children;

  // Render images without a wrapper
  if (
    children.length === 1 &&
    typeof firstChild !== "string" &&
    firstChild &&
    firstChild.props &&
    firstChild.props.src
  ) {
    return <>{children}</>;
  }

  const inner = (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          margin: 29px 0 0;
          padding: 0;
        }
      `}</style>
    </>
  );

  if (noWrap) return inner;

  return <ColumnWrapper>{inner}</ColumnWrapper>;
};

export default Paragraph;
