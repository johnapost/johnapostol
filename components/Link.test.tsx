import React from "react";
import { render, screen } from "@testing-library/react";
import Link from "./Link";

jest.mock("./RepoCard", () => ({
  __esModule: true,
  default: ({ preview, href }: { preview: string; href: string }) => (
    <div data-testid="repo-card" data-preview={preview} data-href={href} />
  ),
}));

describe("Link", () => {
  it("renders a RepoCard when child text starts with 'repo'", () => {
    render(
      <Link href="https://github.com/foo/bar">
        <span>repo: My repo</span>
      </Link>
    );
    expect(screen.getByTestId("repo-card")).toBeInTheDocument();
  });

  it("passes the preview text and href to RepoCard", () => {
    render(
      <Link href="https://github.com/foo/bar">
        <span>repo: My repo</span>
      </Link>
    );
    const card = screen.getByTestId("repo-card");
    expect(card).toHaveAttribute("data-preview", "My repo");
    expect(card).toHaveAttribute("data-href", "https://github.com/foo/bar");
  });

  it("renders a plain anchor for internal paths", () => {
    render(<Link href="/about">About</Link>);
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).not.toHaveAttribute("target");
  });

  it("renders an external anchor with target and rel for external URLs", () => {
    render(<Link href="https://example.com">Visit</Link>);
    const link = screen.getByRole("link", { name: "Visit" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
