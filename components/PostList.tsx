import React from "react";
import { NextPage } from "next";
import PostBlock from "./PostBlock";

export type Post = {
  date: string;
  postBody: string;
  preview: string;
  readTime: number;
  slug: string;
  tags: {
    displayName: string;
    slug: string;
  }[];
  title: string;
};

type Props = {
  posts: Post[];
};

const PostList: NextPage<Props> = ({ posts }: Props) => (
  <>
    {posts.map(
      (post, index): React.JSX.Element => (
        <PostBlock post={post} index={index} key={post.slug} />
      )
    )}
  </>
);

export default PostList;
