import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default ({ children }: IProps) => <main role="main">{children}</main>;
