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
        color: #757575;
        font-family: "Merriweather", serif;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 44.4px;
        margin-bottom: 1rem;
        padding: 0 75px;
      }
    `}</style>
  </ColumnWrapper>
);

export default Blockquote;
