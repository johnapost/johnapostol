import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  children: JSX.Element[] | string;
  level: number;
}

const Heading = ({ children, level }: Props): JSX.Element => {
  // For post titles
  if (level === 1) {
    return (
      <ColumnWrapper>
        <h2>{children}</h2>
        <style jsx>{`
          h2 {
            font-family: "Lato", sans-serif;
            font-size: 1.8rem;
            font-weight: 700;
            margin-top: 2rem;
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  if (level === 2) {
    return (
      <ColumnWrapper>
        <h3>{children}</h3>
        <style jsx>{`
          h3 {
            font-family: "Merriweather", serif;
            font-size: 1.3rem;
            font-weight: 700;
            margin-top: 2rem;
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  return <div />;
};

export default Heading;
