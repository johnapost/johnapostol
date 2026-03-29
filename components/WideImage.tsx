import React from "react";
import NextImage from "next/image";

type Props = {
  caption: string;
  src: string;
  slug: string;
};

const WideImage = ({ caption, src, slug }: Props): React.JSX.Element => (
  <div className="full-width">
    <figure>
      <NextImage
        alt={caption}
        src={`/static/${slug}/${src}`}
        width={1600}
        height={900}
        style={{ width: "100%", height: "auto", marginTop: "44px" }}
      />
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
    <style jsx>{`
      .full-width {
        grid-column: 1 / 4;
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
