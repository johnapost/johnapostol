import React from "react";
import { NextPage } from "next";
import WithLazyLoad from "./WithLazyLoad";
import PostBlock from "./PostBlock";

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
    {posts.map(
      (post, index): JSX.Element => {
        const { slug } = post;
        const EnhancedComponent = WithLazyLoad(
          { slug, src: "hero.jpg" },
          PostBlock
        );
        return <EnhancedComponent post={post} index={index} key={index} />;
      }
    )}
  </>
);

export default PostList;
