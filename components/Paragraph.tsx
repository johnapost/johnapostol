import { ReactElement } from "react";
import ColumnWrapper from "./ColumnWrapper";

interface IProps {
  children: ReactElement[];
}

export default ({ children }: IProps) => {
  const [firstChild] = children;

  // Render images without a wrapper
  if (
    children.length === 1 &&
    firstChild &&
    firstChild.props &&
    firstChild.props.src
  ) {
    return <>{children}</>;
  }

  return (
    <ColumnWrapper>
      <p>{children}</p>
      <style jsx>{`
        p {
          font-size: 1.3rem;
        }
      `}</style>
    </ColumnWrapper>
  );
};
