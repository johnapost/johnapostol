import { ReactElement } from "react";

interface IProps {
  children: ReactElement[];
}

export default ({ children }: IProps) => (
  <div className="column-wrapper">
    {children}
    <style jsx>{`
      .column-wrapper {
        padding: 0 20px;
        grid-column: 2;
      }
    `}</style>
  </div>
);
