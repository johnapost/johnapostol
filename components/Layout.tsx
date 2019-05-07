import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default ({ children }: IProps) => <div>{children}</div>;
