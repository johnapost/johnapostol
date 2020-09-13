import React from "react";

interface Context {
  slug: string;
  date: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
const WithPostContext = <T extends object>(
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
