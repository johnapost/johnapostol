import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import ColumnWrapper from "./ColumnWrapper";
import codeTheme from "../utils/codeTheme";

interface Props {
  value: string;
}

const CodeBlock = ({ value }: Props): JSX.Element => (
  <ColumnWrapper>
    <Highlight
      {...defaultProps}
      code={value}
      language="javascript"
      theme={codeTheme}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }): JSX.Element => (
        <div className="wrapper">
          <pre className={className} style={style}>
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line, key: index })}>
                <span className="line-number">{index + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
    <style jsx>{`
      .wrapper {
        font-size: 1.1rem;
        line-height: 1.5rem;
        margin: 29px -20px;
        overflow: auto;
      }

      pre {
        float: left;
        min-width: 100%;
        overflow: initial;
        padding: 1rem;
      }

      .line-number {
        display: inline-block;
        opacity: 0.3;
        padding: 0 0.5rem;
        user-select: none;
        width: 3rem;
      }
    `}</style>
  </ColumnWrapper>
);

export default CodeBlock;
