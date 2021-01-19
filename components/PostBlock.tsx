import React from "react";
import cn from "classnames";
import formatDate from "../utils/formatDate";
import { atLeastSmall } from "../utils/breakpoints";
import ColumnWrapper from "./ColumnWrapper";
import { Post } from "./PostList";
import Heading from "./Heading";
import type { WithLazyLoadProps } from "./WithLazyLoad";

type Props = {
  index: number;
  post: Post;
} & WithLazyLoadProps;

const PostBlock = ({
  index,
  post: { date, preview, slug, tags, title },
  lazyRef,
  hasViewed,
  optimizedImage,
  lowQualityImage,
}: Props): JSX.Element => {
  const formattedDate = formatDate(date);

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
        <a href={`/post/${slug}`} className="hero" aria-label={title}>
          {hasViewed ? (
            <img
              alt="Preview image"
              srcSet={optimizedImage.srcSet}
              src={optimizedImage.src}
            />
          ) : (
            <img alt="Preview image" src={lowQualityImage} ref={lazyRef} />
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

        img {
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
