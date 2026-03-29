import React from "react";
import { render, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";

jest.mock("./ColumnWrapper", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="column-wrapper">{children}</div>
  ),
}));

describe("Paragraph", () => {
  it("renders children in a <p> tag", () => {
    render(<Paragraph>Hello world</Paragraph>);
    expect(screen.getByText("Hello world").tagName).toBe("P");
  });

  it("wraps in ColumnWrapper by default", () => {
    render(<Paragraph>Text</Paragraph>);
    expect(screen.getByTestId("column-wrapper")).toBeInTheDocument();
  });

  it("skips ColumnWrapper when noWrap is true", () => {
    render(<Paragraph noWrap>Text</Paragraph>);
    expect(screen.queryByTestId("column-wrapper")).not.toBeInTheDocument();
  });

  it("renders image children directly without a <p> wrapper", () => {
    render(
      <Paragraph>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photo.jpg" alt="test" />
      </Paragraph>
    );
    // The image should render but not be wrapped in a <p>
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.closest("p")).toBeNull();
  });

  it("does not wrap image children in ColumnWrapper", () => {
    render(
      <Paragraph>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photo.jpg" alt="test" />
      </Paragraph>
    );
    expect(screen.queryByTestId("column-wrapper")).not.toBeInTheDocument();
  });
});
