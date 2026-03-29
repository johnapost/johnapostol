import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

jest.mock("./CenterImage", () => ({
  __esModule: true,
  default: ({
    caption,
    src,
    slug,
  }: {
    caption: string;
    src: string;
    slug: string;
  }) => (
    <div
      data-testid="center-image"
      data-caption={caption}
      data-src={src}
      data-slug={slug}
    />
  ),
}));

jest.mock("./WideImage", () => ({
  __esModule: true,
  default: ({
    caption,
    src,
    slug,
  }: {
    caption: string;
    src: string;
    slug: string;
  }) => (
    <div
      data-testid="wide-image"
      data-caption={caption}
      data-src={src}
      data-slug={slug}
    />
  ),
}));

const context = { slug: "my-post" };

describe("Image", () => {
  it("renders CenterImage when alt starts with 'center'", () => {
    render(<Image alt="center: A caption" src="/img.jpg" context={context} />);
    expect(screen.getByTestId("center-image")).toBeInTheDocument();
  });

  it("renders WideImage when alt starts with 'wide'", () => {
    render(<Image alt="wide: A caption" src="/img.jpg" context={context} />);
    expect(screen.getByTestId("wide-image")).toBeInTheDocument();
  });

  it("returns null for an unknown size key", () => {
    const { container } = render(
      <Image alt="full: A caption" src="/img.jpg" context={context} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("passes caption, src, and slug through to the child component", () => {
    render(
      <Image alt="center: My caption" src="/photo.jpg" context={context} />
    );
    const el = screen.getByTestId("center-image");
    expect(el).toHaveAttribute("data-caption", "My caption");
    expect(el).toHaveAttribute("data-src", "/photo.jpg");
    expect(el).toHaveAttribute("data-slug", "my-post");
  });
});
