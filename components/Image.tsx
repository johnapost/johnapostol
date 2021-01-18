import React from "react";
import WideImage from "./WideImage";
import CenterImage from "./CenterImage";
import WithLazyLoad from "./WithLazyLoad";
import type { WithLazyLoadProps } from "./WithLazyLoad";

type Props = {
  alt: string;
  src: string;
  context: {
    slug: string;
  };
} & WithLazyLoadProps;

type Components = {
  [key: string]: typeof CenterImage | typeof WideImage;
};

const Image = ({ alt, src, context: { slug } }: Props): JSX.Element | null => {
  const [size, caption] = alt.split(": ");
  const components: Components = {
    center: CenterImage,
    wide: WideImage,
  };

  if (!components[size]) return null;

  const EnhancedComponent = WithLazyLoad({ slug, src }, components[size]);
  return <EnhancedComponent caption={caption} />;
};

export default Image;
