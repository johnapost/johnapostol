import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ColumnWrapper from "./ColumnWrapper";

interface Props {
  alt: string;
  src: string;
  context: {
    slug: string;
  };
}

const Image = ({ alt, src, context: { slug } }: Props): JSX.Element | null => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const optimizedImage = require(`../public/static/${slug}/${src}?resize`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lowQualityImage = require(`../public/static/${slug}/${src}?lqip`);
  const [size, caption] = alt.split(": ");
  const [ref, inView] = useInView({ threshold: 0.25 });
  const [hasLoaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 1) setLoaded(true);
  }, [count]);

  // Count the number of times inView has fired
  useEffect(() => setCount(count + 1), [inView]);

  if (size === "wide") {
    return (
      <div className="full-width">
        <figure>
          {hasLoaded ? (
            <img
              alt={caption}
              srcSet={optimizedImage.srcSet}
              src={optimizedImage.src}
            />
          ) : (
            <img
              className="low-quality"
              ref={ref}
              alt={caption}
              src={lowQualityImage}
            />
          )}
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

  if (size === "center") {
    return (
      <ColumnWrapper>
        <figure>
          {hasLoaded ? (
            <img
              alt={caption}
              srcSet={optimizedImage.srcSet}
              src={optimizedImage.src}
            />
          ) : (
            <img
              className="low-quality"
              ref={ref}
              alt={caption}
              src={lowQualityImage}
            />
          )}
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        </figure>
        <style jsx>{`
          img {
            margin-top: 44px;
            width: 100%;
          }

          .low-quality {
            filter: blur(25px);
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
