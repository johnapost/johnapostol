import React from "react";
import { render, screen } from "@testing-library/react";
import CodeBlock from "./CodeBlock";

jest.mock("./ColumnWrapper", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="column-wrapper">{children}</div>
  ),
}));

describe("CodeBlock", () => {
  it("wraps long lines instead of horizontally scrolling", () => {
    const { container } = render(
      <CodeBlock className="language-js">
        {'const longValue = "this is a long line that should wrap";'}
      </CodeBlock>
    );

    expect(screen.getByTestId("column-wrapper")).toBeInTheDocument();
    expect(container.querySelector(".code-line")).toBeInTheDocument();
    expect(container.textContent).toContain(
      'const longValue = "this is a long line that should wrap";'
    );
    expect(screen.getByText("1")).toHaveClass("line-number");
  });
});
