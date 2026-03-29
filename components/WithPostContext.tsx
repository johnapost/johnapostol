import React from "react";

type Context = {
  slug: string;
};

const WithPostContext = <T extends Record<string, unknown>>(
  context: Context,
  Component: React.ComponentType<T>
): React.ComponentType<T> => {
  const WrappedComponent = (props: T): React.JSX.Element => (
    <Component context={context} {...props} />
  );
  WrappedComponent.displayName = "WithPostContext";
  return WrappedComponent;
};

export default WithPostContext;
