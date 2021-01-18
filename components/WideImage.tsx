import React from "react";
import { WithLazyLoadProps } from "./WithLazyLoad";

type Props = {
  caption: string;
} & WithLazyLoadProps;

const WideImage = ({
  caption,
  hasLoaded,
  optimizedImage,
  lazyRef,
  lowQualityImage,
}: Props): JSX.Element => (
  <div className="full-width">
    <figure>
      {hasLoaded ? (
        <img
          alt={caption}
          srcSet={optimizedImage.srcSet}
          src={optimizedImage.src}
        />
      ) : (
        <img ref={lazyRef} alt={caption} src={lowQualityImage} />
      )}
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
    <style jsx>{`
      .full-width {
        grid-column: 1 / 4;
      }

      img {
        margin-top: 44px;
        ${caption ? "margin-bottom: 15px;" : ""}
        width: 100%;
      }

      figcaption {
        font-size: 0.8rem;
        line-height: 22.4px;
        margin-bottom: 1rem;
        text-align: center;
      }
    `}</style>
  </div>
);

export default WideImage;
