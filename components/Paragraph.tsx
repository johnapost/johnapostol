import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default ({ children }: IProps) => (
  <>
    <p>{children}</p>
    <style jsx>{`
      p {
        font-size: 1.3rem;
      }
    `}</style>
  </>
);
