import React from "react";
import cn from "classnames";
import formatDate from "../utils/formatDate";
import { atLeastSmall } from "../utils/breakpoints";
import ColumnWrapper from "./ColumnWrapper";
import { Post } from "./PostList";

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
      <div className={cn("block", { first: index === 0 })}>
        <div className="info">
          <div className="title">
            <a href={`/post/${slug}`}>{title}</a>
          </div>
          <div className="preview">{preview}</div>
          <div className="meta">
            {formattedDate}
            {tags.length &&
              tags.map((tag: string) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <img
          className="hero"
          srcSet={optimizedImage.srcSet}
          src={optimizedImage.src}
        />
      </div>
      <style jsx>{`
        .block {
          align-items: center;
          display: flex;
          flex-direction: column-reverse;
          margin-top: 4rem;
          justify-content: space-between;
        }

        .first {
          margin-top: 1rem;
        }

        .info {
          padding-right: 1rem;
          width: 80%;
        }

        .preview {
          max-height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
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
