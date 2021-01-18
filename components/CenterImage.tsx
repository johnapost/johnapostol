import React from "react";
import ColumnWrapper from "./ColumnWrapper";
import { WithLazyLoadProps } from "./WithLazyLoad";

type Props = {
  caption: string;
} & WithLazyLoadProps;

const CenterImage = ({
  caption,
  hasLoaded,
  optimizedImage,
  lazyRef,
  lowQualityImage,
}: Props): JSX.Element => (
  <ColumnWrapper>
    <figure>
      {hasLoaded ? (
        <img
          alt={caption}
          srcSet={optimizedImage.srcSet}
          src={optimizedImage.src}
        />
      ) : (
        <img
          className="low-quality"
          ref={lazyRef}
          alt={caption}
          src={lowQualityImage}
        />
      )}
      <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
    </figure>
    <style jsx>{`
      img {
        margin-top: 44px;
        width: 100%;
      }

      .low-quality {
        filter: blur(25px);
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
