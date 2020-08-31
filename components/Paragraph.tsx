import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  noWrap?: boolean;
}

const Paragraph = ({ children, noWrap }: Props): JSX.Element => {
  const firstChild = children instanceof Array ? children[0] : children;

  // Render images without a wrapper
  if (
    typeof firstChild !== "string" &&
    firstChild &&
    firstChild.props &&
    firstChild.props.src
  ) {
    return <>{firstChild}</>;
  }

  const inner = (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          line-height: 2rem;
          margin: 29px 0 0;
          padding: 0;
          text-rendering: optimizelegibility;
        }
      `}</style>
    </>
  );

  if (noWrap) return inner;

  return <ColumnWrapper>{inner}</ColumnWrapper>;
};

export default Paragraph;
