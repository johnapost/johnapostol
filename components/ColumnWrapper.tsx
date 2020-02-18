import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ColumnWrapper = ({ children }: Props): JSX.Element => (
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
