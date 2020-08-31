import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: JSX.Element[];
  ordered?: boolean;
}

const List = ({ children, ordered = false }: Props): JSX.Element => (
  <ColumnWrapper>
    {ordered ? (
      <>
        <ol>{children}</ol>
        <style jsx>{`
          ol {
            margin-top: 2rem;
          }
        `}</style>
      </>
    ) : (
      <>
        <ul>{children}</ul>
        <style jsx>{`
          ul {
            list-style: none;
            margin-top: 2rem;
          }
        `}</style>
      </>
    )}
  </ColumnWrapper>
);

export default List;
