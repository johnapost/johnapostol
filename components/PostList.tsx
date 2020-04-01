import React from "react";
import { NextPage } from "next";
import formatDate from "../utils/formatDate";
import ColumnWrapper from "./ColumnWrapper";
import Paragraph from "./Paragraph";

export type Post = {
  date: string;
  preview: string;
  slug: string;
  tags: string[];
  title: string;
};

type Props = {
  posts: Post[];
};

const PostList: NextPage<Props> = ({ posts }: Props) => (
  <>
    {posts.map(({ title, date, slug, tags, preview }, index) => {
      const formattedDate = formatDate(date);
      return (
        <ColumnWrapper key={`${title}-${formattedDate}`}>
          <div className={`inner ${index === 0 && "first"}`}>
            <div className="post-heading">{formattedDate}</div>
            <div className="title">
              <a href={`/post/${slug}/`}>{title}</a>
            </div>
            <div>
              {tags.length && (
                <div className="tags">
                  {tags.map((tag: string) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
            <Paragraph noWrap={true}>{preview}</Paragraph>
          </div>
        </ColumnWrapper>
      );
    })}
    <style jsx>{`
      .inner {
        margin-top: 4rem;
      }

      .first {
        margin-top: 1rem;
      }

      .post-heading {
        font-family: "Merriweather", serif;
        font-size: 1rem;
        margin-top: 5px;
      }

      .tags {
        font-family: "Lato", sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
      }

      .tags span {
        border: solid 2px #362640;
        color: #362640;
        display: inline-block;
        padding: 3px 5px;
        margin-top: 1rem;
      }

      .tags span + span {
        margin-left: 0.5rem;
      }

      .title {
        color: #362640;
        font-family: "Lato", sans-serif;
        font-size: 1.5rem;
        margin-top: 5px;
      }
    `}</style>
  </>
);

export default PostList;
