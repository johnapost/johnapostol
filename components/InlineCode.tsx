import React from "react";

interface Props {
  children: string;
}

const InlineCode = ({ children }: Props): JSX.Element => (
  <>
    <span>{children}</span>
    <style jsx>{`
      span {
        color: #ffffff;
        background: #362640;
        font-family: monospace;
        overflow-wrap: break-word;
        padding: 2px 4px;
      }
    `}</style>
  </>
);

export default InlineCode;
