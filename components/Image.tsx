import React from "react";
import WideImage from "./WideImage";
import CenterImage from "./CenterImage";

type Props = {
  alt: string;
  src: string;
  context: {
    slug: string;
  };
};

type Components = {
  [key: string]: typeof CenterImage | typeof WideImage;
};

const Image = ({
  alt,
  src,
  context: { slug },
}: Props): React.JSX.Element | null => {
  const [size, caption] = alt.split(": ");
  const components: Components = {
    center: CenterImage,
    wide: WideImage,
  };

  if (!components[size]) return null;

  const Component = components[size];
  return <Component caption={caption} src={src} slug={slug} />;
};

export default Image;
