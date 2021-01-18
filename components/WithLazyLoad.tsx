import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type WithLazyLoadProps = {
  lazyRef: (node?: Element | null) => void;
  hasViewed: boolean;
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

type WithoutLazyLoadProps<P> = React.ComponentType<
  Omit<P, keyof WithLazyLoadProps>
>;

const WithLazyLoad = <T extends Record<string, unknown>>(
  { slug, src }: RequiredProps,
  Component: React.ComponentType<T>
): WithoutLazyLoadProps<T> => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const optimizedImage = require(`../public/static/${slug}/${src}?resize`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const lowQualityImage = require(`../public/static/${slug}/${src}?lqip`);

  const WrappedComponent = (props: T): JSX.Element => {
    const [ref, inView] = useInView({ threshold: 0.25 });
    const [hasViewed, setViewed] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count > 1) setViewed(true);
    }, [count]);

    // Count the number of times inView has fired
    useEffect(() => setCount(count + 1), [inView]);

    return (
      <Component
        lazyRef={ref}
        hasViewed={hasViewed}
        optimizedImage={optimizedImage}
        lowQualityImage={lowQualityImage}
        {...props}
      />
    );
  };

  return WrappedComponent as WithoutLazyLoadProps<T>;
};

export default WithLazyLoad;
