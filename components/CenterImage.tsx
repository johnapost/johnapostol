import React from "react";
import ColumnWrapper from "./ColumnWrapper";
import { WithLazyLoadProps } from "./WithLazyLoad";

type Props = {
  caption: string;
} & WithLazyLoadProps;

const CenterImage = ({
  caption,
  hasViewed,
  optimizedImage,
  lazyRef,
  lowQualityImage,
}: Props): JSX.Element => (
  <ColumnWrapper>
    <figure>
      {hasViewed ? (
        <img
          alt={caption}
          srcSet={optimizedImage.srcSet}
          src={optimizedImage.src}
        />
      ) : (
        <img ref={lazyRef} alt={caption} src={lowQualityImage} />
      )}
      <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
    </figure>
    <style jsx>{`
      img {
        margin-top: 44px;
        width: 100%;
      }

      figcaption {
        font-size: 0.8rem;
        line-height: 22.4px;
        text-align: center;
      }
    `}</style>
  </ColumnWrapper>
);

export default CenterImage;
