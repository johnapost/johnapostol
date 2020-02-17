import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  alt: string;
  src: string;
}

const Image = ({ alt, src }: Props): JSX.Element => {
  if (alt.startsWith("wide")) {
    return (
      <div className="full-width">
        <img alt={alt} src={require(`../${src}`)} />
        <style jsx>{`
          .full-width {
            grid-column: 1 / 4;
          }

          img {
            margin-top: 44px;
            margin-bottom: 80px;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }

  if (alt.startsWith("center")) {
    return (
      <ColumnWrapper>
        <img alt={alt} src={require(`../${src}`)} />
        <style jsx>{`
          img {
            margin-top: 44px;
            width: 100%;
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  return null;
};

export default Image;
