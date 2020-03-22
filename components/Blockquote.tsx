import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: JSX.Element[];
}

const Blockquote = ({ children }: Props): JSX.Element => (
  <ColumnWrapper>
    <blockquote>
      <em>{children}</em>
    </blockquote>
    <style jsx>{`
      blockquote {
        font-family: "Merriweather", serif;
        font-size: 2rem;
        font-weight: 400;
        line-height: 44.4px;
        margin-bottom: 1rem;
        padding-left: 50px;
      }
    `}</style>
  </ColumnWrapper>
);

export default Blockquote;
