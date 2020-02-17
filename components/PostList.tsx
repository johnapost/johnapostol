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
    {posts.map(({ title, date, slug, tags, preview }) => {
      const formattedDate = formatDate(date);
      return (
        <div className="grid" key={`${title}-${formattedDate}`}>
          <ColumnWrapper>
            <div className="post-heading">{formattedDate}</div>
            <div className="title">
              <a href={`/post/${slug}`}>{title}</a>
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
          </ColumnWrapper>
          <Paragraph>{preview}</Paragraph>
        </div>
      );
    })}
    <style jsx>{`
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
        margin-left: 0.15rem;
      }

      .title {
        color: #362640;
        font-family: "Lato", sans-serif;
        font-size: 1.5rem;
        margin-top: 5px;
      }

      @media (min-width: 900px) {
        .grid {
          display: grid;
          grid-template-columns: 1fr 740px 1fr;
        }
      }
    `}</style>
  </>
);

export default PostList;
