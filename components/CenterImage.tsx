import React from "react";
import NextImage from "next/image";
import ColumnWrapper from "./ColumnWrapper";

type Props = {
  caption: string;
  src: string;
  slug: string;
};

const CenterImage = ({ caption, src, slug }: Props): React.JSX.Element => (
  <ColumnWrapper>
    <figure>
      <NextImage
        alt={caption}
        src={`/static/${slug}/${src}`}
        width={740}
        height={494}
        style={{ width: "100%", height: "auto", marginTop: "44px" }}
      />
      <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
    </figure>
    <style jsx>{`
      figcaption {
        font-size: 0.8rem;
        line-height: 22.4px;
        text-align: center;
      }
    `}</style>
  </ColumnWrapper>
);

export default CenterImage;
