import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  level: number;
  noMargin?: boolean;
  noWrap?: boolean;
}

const Heading = ({ children, level, noMargin, noWrap }: Props): JSX.Element => {
  let inner = <div />;

  // For forcing h1
  if (level === 0) {
    inner = (
      <>
        <h1>{children}</h1>
        <style jsx>{`
          h1 {
            font-family: "Lato", sans-serif;
            font-size: 1.8rem;
            font-weight: 700;
            ${!noMargin ? "margin-top: 2rem;" : ""}
          }
        `}</style>
      </>
    );
  }

  // For post titles
  if (level === 1) {
    inner = (
      <>
        <h2>{children}</h2>
        <style jsx>{`
          h2 {
            font-family: "Lato", sans-serif;
            font-size: 1.8rem;
            font-weight: 700;
            ${!noMargin ? "margin-top: 2rem;" : ""}
          }
        `}</style>
      </>
    );
  }

  if (level === 2) {
    inner = (
      <>
        <h3>{children}</h3>
        <style jsx>{`
          h3 {
            font-family: "Merriweather", serif;
            font-size: 1.3rem;
            font-weight: 700;
            ${!noMargin ? "margin-top: 2rem;" : ""}
          }
        `}</style>
      </>
    );
  }

  if (noWrap) return inner;

  return <ColumnWrapper>{inner}</ColumnWrapper>;
};

export default Heading;
