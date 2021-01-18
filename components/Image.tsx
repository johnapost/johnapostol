import React from "react";
import WideImage from "./WideImage";
import WithLazyLoad from "./WithLazyLoad";
import type { WithLazyLoadProps } from "./WithLazyLoad";

type Props = {
  alt: string;
  src: string;
  context: {
    slug: string;
  };
} & WithLazyLoadProps;

const Image = ({ alt, src, context: { slug } }: Props): JSX.Element | null => {
  const [size, caption] = alt.split(": ");

  if (size === "wide") {
    const EnhancedComponent = WithLazyLoad({ slug, src }, WideImage);
    return <EnhancedComponent caption={caption} />;
  }

  if (size === "center") {
    const EnhancedComponent = WithLazyLoad({ slug, src }, WideImage);
    return <EnhancedComponent caption={caption} />;
  }

  return null;
};

export default Image;
