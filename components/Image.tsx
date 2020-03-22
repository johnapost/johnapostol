import React from "react";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  alt: string;
  src: string;
  context: {
    date: string;
  };
}

const Image = ({
  alt: size,
  src,
  context: { date },
}: Props): JSX.Element | null => {
  const caption = size.split(": ")[1];

  if (size.startsWith("wide")) {
    return (
      <div className="full-width">
        <figure>
          <img alt={caption} src={require(`../public/static/${date}/${src}`)} />
          {caption && (
            <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
          )}
        </figure>
        <style jsx>{`
          .full-width {
            grid-column: 1 / 4;
          }

          img {
            margin-top: 44px;
            ${caption ? "margin-bottom: 15px;" : ""}
            width: 100%;
          }

          figcaption {
            font-size: 0.8rem;
            line-height: 22.4px;
            margin-bottom: 1rem;
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
          <img alt={caption} src={require(`../public/static/${date}/${src}`)} />
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
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
