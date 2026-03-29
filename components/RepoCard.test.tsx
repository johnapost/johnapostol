import React from "react";
import { render, screen } from "@testing-library/react";
import RepoCard from "./RepoCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

jest.mock("./GitHub", () => ({
  __esModule: true,
  default: () => <svg data-testid="github-icon" />,
}));

const href = "https://github.com/johnapost/my-repo";

describe("RepoCard", () => {
  it("renders as an external link with correct href", () => {
    render(<RepoCard href={href} preview="A cool repo" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("displays the repo path extracted from the URL", () => {
    render(<RepoCard href={href} preview="A cool repo" />);
    expect(screen.getByText("johnapost/my-repo")).toBeInTheDocument();
  });

  it("displays the preview text", () => {
    render(<RepoCard href={href} preview="A cool repo" />);
    expect(screen.getByText("A cool repo")).toBeInTheDocument();
  });

  it("renders the GitHub icon", () => {
    render(<RepoCard href={href} preview="A cool repo" />);
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
  });
});
