import React from "react";

interface Context {
  slug: string;
  date: string;
}

const WithPostContext = <T extends Record<string, unknown>>(
  context: Context,
  WrappedComponent: React.ComponentType<T>
): React.ComponentType<T> => {
  return class extends React.Component<T> {
    public static displayName = "WithPostContext";

    public render(): JSX.Element {
      return <WrappedComponent context={context} {...(this.props as T)} />;
    }
  };
};

export default WithPostContext;
