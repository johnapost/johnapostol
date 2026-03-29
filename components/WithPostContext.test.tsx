import React from "react";
import { render, screen } from "@testing-library/react";
import WithPostContext from "./WithPostContext";

interface TestProps extends Record<string, unknown> {
  context?: { slug: string };
  label: string;
}

const TestComponent = ({ context, label }: TestProps): React.JSX.Element => (
  <div>
    <span data-testid="slug">{context?.slug}</span>
    <span data-testid="label">{label}</span>
  </div>
);

describe("WithPostContext", () => {
  it("injects context into the wrapped component", () => {
    const Wrapped = WithPostContext({ slug: "my-post" }, TestComponent);
    render(<Wrapped label="hello" />);
    expect(screen.getByTestId("slug")).toHaveTextContent("my-post");
  });

  it("passes through original props unchanged", () => {
    const Wrapped = WithPostContext({ slug: "my-post" }, TestComponent);
    render(<Wrapped label="hello" />);
    expect(screen.getByTestId("label")).toHaveTextContent("hello");
  });

  it("sets displayName on the wrapped component", () => {
    const Wrapped = WithPostContext({ slug: "my-post" }, TestComponent);
    expect(Wrapped.displayName).toBe("WithPostContext");
  });
});
