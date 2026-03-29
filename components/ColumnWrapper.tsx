import React from "react";

interface Props {
  children: React.ReactNode;
}

const ColumnWrapper = ({ children }: Props): React.JSX.Element => (
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

export default ColumnWrapper;
