import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  alt: string;
  src: string;
}

const Image = ({ alt: size, src }: Props): JSX.Element | null => {
  const imageAlt = size.split(": ")[1];

  if (size.startsWith("wide")) {
    return (
      <div className="full-width">
        <figure>
          <img alt={imageAlt} src={require(`../${src}`)} />
          <figcaption dangerouslySetInnerHTML={{ __html: imageAlt }} />
        </figure>
        <style jsx>{`
          .full-width {
            grid-column: 1 / 4;
          }

          img {
            margin-top: 44px;
            margin-bottom: 80px;
            width: 100%;
          }

          figcaption {
            font-size: 0.8rem;
            line-height: 22.4px;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }

  if (size.startsWith("center")) {
    return (
      <ColumnWrapper>
        <figure>
          <img alt={imageAlt} src={require(`../${src}`)} />
          <figcaption dangerouslySetInnerHTML={{ __html: imageAlt }} />
        </figure>
        <style jsx>{`
          img {
            margin-top: 44px;
            width: 100%;
          }

          figcaption {
            font-size: 0.8rem;
            line-height: 22.4px;
            text-align: center;
          }
        `}</style>
      </ColumnWrapper>
    );
  }

  return null;
};

export default Image;
