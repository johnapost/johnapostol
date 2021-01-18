import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import cn from "classnames";
import formatDate from "../utils/formatDate";
import { atLeastSmall } from "../utils/breakpoints";
import ColumnWrapper from "./ColumnWrapper";
import { Post } from "./PostList";
import Heading from "./Heading";

type Props = {
  index: number;
  post: Post;
};

const PostBlock = ({
  index,
  post: { date, preview, slug, tags, title },
}: Props): JSX.Element => {
  const formattedDate = formatDate(date);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const optimizedImage = require(`../public/static/${slug}/hero.jpg?resize`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lowQualityImage = require(`../public/static/${slug}/hero.jpg?lqip`);
  const [ref, inView] = useInView({ threshold: 0.25 });
  const [hasLoaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 1) setLoaded(true);
  }, [count]);

  // Count the number of times inView has fired
  useEffect(() => setCount(count + 1), [inView]);

  return (
    <ColumnWrapper>
      <div className={cn("block", { first: index === 0 })}>
        <div className="info">
          <a href={`/post/${slug}`} data-cy={`post-${index}`}>
            <Heading level={2} noMargin noWrap>
              {title}
            </Heading>
            <p className="preview">{preview}</p>
          </a>
          <div className="meta">
            <span className="date">{formattedDate}</span>
            {tags.length &&
              tags.map((tag: string) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
          </div>
        </div>
        <a href={`/post/${slug}`} className="hero">
          {hasLoaded ? (
            <img srcSet={optimizedImage.srcSet} src={optimizedImage.src} />
          ) : (
            <img className="low-quality" ref={ref} src={lowQualityImage} />
          )}
        </a>
      </div>
      <style jsx>{`
        .block {
          align-items: center;
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          margin: 4rem auto 0;
          max-width: 400px;
        }

        .info a {
          color: inherit;
          display: block;
          text-decoration: inherit;
        }

        .preview {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          margin: 1rem 0;
          overflow: hidden;
        }

        .meta {
          font-size: 0.75rem;
          position: relative;
          z-index: 5;
        }

        .tag {
          border: solid 2px #362640;
          color: #362640;
          display: inline-block;
          font-family: "Lato", sans-serif;
          font-size: 0.75rem;
          margin-top: 1rem;
          padding: 3px 5px;
          text-transform: uppercase;
        }

        .tag {
          margin-left: 0.5rem;
        }

        .hero {
          display: block;
          min-width: 250px;
          width: auto;
        }

        .low-quality {
          filter: blur(25px);
          width: 100%;
        }

        @media ${atLeastSmall} {
          .block {
            flex-direction: row;
            max-width: none;
          }

          .first {
            margin-top: 2rem;
          }

          .info {
            padding-right: 1rem;
            width: 80%;
          }

          .hero {
            width: 20%;
          }
        }
      `}</style>
    </ColumnWrapper>
  );
};

export default PostBlock;
