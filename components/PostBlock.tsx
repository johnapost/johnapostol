import React from "react";
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

  return (
    <ColumnWrapper>
      <a
        className={cn("block", { first: index === 0 })}
        href={`/post/${slug}`}
        data-cy={`post-${index}`}
      >
        <div className="info">
          <Heading level={2} noMargin noWrap>
            {title}
          </Heading>
          <p className="preview">{preview}</p>
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
        <img
          className="hero"
          srcSet={optimizedImage.srcSet}
          src={optimizedImage.src}
        />
      </a>
      <style jsx>{`
        .block {
          align-items: center;
          display: flex;
          flex-direction: column-reverse;
          margin-top: 5rem;
          justify-content: space-between;
          text-decoration: inherit;
          color: inherit;
        }

        .first {
          margin-top: 1rem;
        }

        .info {
          padding-right: 1rem;
          width: 80%;
        }

        .preview {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 1rem 0;
        }

        .meta {
          font-size: 0.75rem;
          position: relative;
          z-index: 5;
        }

        .tag {
          font-family: "Lato", sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          border: solid 2px #362640;
          color: #362640;
          display: inline-block;
          padding: 3px 5px;
          margin-top: 1rem;
        }

        .tag {
          margin-left: 0.5rem;
        }

        img {
          display: block;
          min-width: 220px;
          width: 20%;
        }

        @media ${atLeastSmall} {
          .block {
            flex-direction: row;
          }
        }
      `}</style>
    </ColumnWrapper>
  );
};

export default PostBlock;
