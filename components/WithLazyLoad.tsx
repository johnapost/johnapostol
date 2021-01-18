import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type WithLazyLoadProps = {
  lazyRef: (node?: Element | null) => void;
  hasLoaded: boolean;
  optimizedImage: {
    src: string;
    srcSet: string;
  };
  lowQualityImage: string;
};

type RequiredProps = {
  slug: string;
  src: string;
};

const WithLazyLoad = <T extends Record<string, unknown>>(
  { slug, src }: RequiredProps,
  Component: React.ComponentType<T>
): React.ComponentType<T> => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const optimizedImage = require(`../public/static/${slug}/${src}.jpg?resize`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lowQualityImage = require(`../public/static/${slug}/${src}.jpg?lqip`);

  const WrappedComponent = (props: T): JSX.Element => {
    const [ref, inView] = useInView({ threshold: 0.25 });
    const [hasLoaded, setLoaded] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count > 1) setLoaded(true);
    }, [count]);

    // Count the number of times inView has fired
    useEffect(() => setCount(count + 1), [inView]);

    return (
      <Component
        lazyRef={ref}
        hasLoaded={hasLoaded}
        optimizedImage={optimizedImage}
        lowQualityImage={lowQualityImage}
        {...props}
      />
    );
  };

  return WrappedComponent;
};

export default WithLazyLoad;
