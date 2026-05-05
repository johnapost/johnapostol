import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import ColumnWrapper from "./ColumnWrapper";
import codeTheme from "../utils/codeTheme";

interface Props {
  children?: string;
  className?: string;
}

const CodeBlock = ({
  children = "",
  className = "",
}: Props): React.JSX.Element => {
  const language = (className.replace("language-", "") ||
    "javascript") as "javascript";
  const value = children.replace(/\n$/, "");
  return (
    <ColumnWrapper>
      <Highlight
        {...defaultProps}
        code={value}
        language={language}
        theme={codeTheme}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }): React.JSX.Element => (
          <div className="wrapper">
            <pre className={className} style={style}>
              {tokens.map((line, index) => {
                const { key, className, ...lineProps } = getLineProps({
                  line,
                  key: index,
                });

                return (
                  <div
                    key={key}
                    className={`${className} code-line`}
                    {...lineProps}
                  >
                    <span className="line-number">{index + 1}</span>
                    {line.map((token, tokenIndex) => {
                      const { key, ...tokenProps } = getTokenProps({
                        token,
                        key: tokenIndex,
                      });

                      return <span key={key} {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </pre>
          </div>
        )}
      </Highlight>
      <style jsx>{`
        .wrapper {
          font-size: 1.1rem;
          line-height: 1.5rem;
          margin: 29px -20px 0;
          overflow: visible;
        }

        pre {
          overflow-wrap: anywhere;
          padding: 1rem;
          white-space: pre-wrap;
          width: 100%;
        }

        .code-line {
          display: block;
          min-height: 1.5rem;
          padding-left: 4rem;
          position: relative;
        }

        .line-number {
          left: 0;
          opacity: 0.3;
          padding: 0 0.5rem;
          position: absolute;
          text-align: right;
          user-select: none;
          width: 3rem;
        }
      `}</style>
    </ColumnWrapper>
  );
};

export default CodeBlock;
