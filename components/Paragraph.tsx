import React, { ReactElement } from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: ReactElement[] | string;
}

const Paragraph = ({ children }: Props): JSX.Element => {
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

  return (
    <ColumnWrapper>
      <p>{children}</p>
      <style jsx>{`
        p {
          font-size: 1.3rem;
          margin: 29px 0 0;
          padding: 0;
        }
      `}</style>
    </ColumnWrapper>
  );
};

export default Paragraph;
