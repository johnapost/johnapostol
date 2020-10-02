import React from "react";

interface Props {
  children: string;
}

const InlineCode = ({ children }: Props): JSX.Element => (
  <>
    <span>{children}</span>
    <style jsx>{`
      span {
        color: #d6deeb;
        background: #011627;
        font-family: monospace;
        white-space: nowrap;
        overflow-wrap: break-word;
        padding: 2px 4px;
      }
    `}</style>
  </>
);

export default InlineCode;
