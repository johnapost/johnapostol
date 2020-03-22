import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: JSX.Element[];
}

const List = ({ children }: Props): JSX.Element => (
  <ColumnWrapper>
    <ul>{children}</ul>
    <style jsx>{`
      ul {
        list-style: none;
        margin-top: 2rem;
      }
    `}</style>
  </ColumnWrapper>
);

export default List;
