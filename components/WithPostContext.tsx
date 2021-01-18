import React from "react";

type Context = {
  slug: string;
};

const WithPostContext = <T extends Record<string, unknown>>(
  context: Context,
  Component: React.ComponentType<T>
): React.ComponentType<T> => {
  return class extends React.Component<T> {
    public static displayName = "WithPostContext";

    public render(): JSX.Element {
      return <Component context={context} {...(this.props as T)} />;
    }
  };
};

export default WithPostContext;
