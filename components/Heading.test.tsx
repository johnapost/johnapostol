import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

jest.mock("./ColumnWrapper", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="column-wrapper">{children}</div>
  ),
}));

describe("Heading", () => {
  it("renders an h1 for level 0", () => {
    render(<Heading level={0}>Title</Heading>);
    expect(
      screen.getByRole("heading", { level: 1, name: "Title" })
    ).toBeInTheDocument();
  });

  it("renders an h2 for level 1", () => {
    render(<Heading level={1}>Post title</Heading>);
    expect(
      screen.getByRole("heading", { level: 2, name: "Post title" })
    ).toBeInTheDocument();
  });

  it("renders an h3 for level 2", () => {
    render(<Heading level={2}>Section</Heading>);
    expect(
      screen.getByRole("heading", { level: 3, name: "Section" })
    ).toBeInTheDocument();
  });

  it("wraps in ColumnWrapper by default", () => {
    render(<Heading level={1}>Wrapped</Heading>);
    expect(screen.getByTestId("column-wrapper")).toBeInTheDocument();
  });

  it("skips ColumnWrapper when noWrap is true", () => {
    render(
      <Heading level={1} noWrap>
        Unwrapped
      </Heading>
    );
    expect(screen.queryByTestId("column-wrapper")).not.toBeInTheDocument();
  });
});
