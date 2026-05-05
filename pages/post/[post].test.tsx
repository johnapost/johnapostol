import React from "react";
import { render, screen } from "@testing-library/react";
import Post from "./[post].page";

jest.mock("react-markdown", () => ({
  __esModule: true,
  default: ({
    children,
    components,
  }: {
    children: string;
    components: {
      code: (props: {
        children?: React.ReactNode;
        className?: string;
      }) => React.ReactNode;
      pre: (props: { children?: React.ReactNode }) => React.ReactNode;
    };
  }) => {
    const fencedCode = /```(\w+)\n([\s\S]*?)```/.exec(children);

    if (fencedCode) {
      return components.pre({
        children: components.code({
          children: fencedCode[2],
          className: `language-${fencedCode[1]}`,
        }),
      });
    }

    const inlineCode = /`([^`]+)`/.exec(children);

    if (inlineCode) {
      return components.code({ children: inlineCode[1] });
    }

    return <>{children}</>;
  },
}));

jest.mock("../../components/PostHeading", () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <h1>{title}</h1>,
}));

jest.mock("../../components/Footer", () => ({
  __esModule: true,
  default: () => <footer />,
}));

jest.mock("../../components/StructuredData", () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock("../../components/CodeBlock", () => ({
  __esModule: true,
  default: ({
    children,
    className,
  }: {
    children?: string;
    className?: string;
  }) => (
    <pre data-testid="code-block" data-class-name={className}>
      {children}
    </pre>
  ),
}));

jest.mock("../../components/InlineCode", () => ({
  __esModule: true,
  default: ({ children }: { children: string }) => (
    <span data-testid="inline-code">{children}</span>
  ),
}));

const props = {
  date: "2024-01-01",
  hero: "/static/test/hero.jpg",
  preview: "Preview",
  readTime: 1,
  slug: "test-post",
  title: "Test Post",
};

describe("Post", () => {
  it("renders fenced code blocks with their source text", () => {
    render(
      <Post {...props} postBody={'```tsx\nconst greeting = "hello";\n```'} />
    );

    const codeBlock = screen.getByTestId("code-block");
    expect(codeBlock).toHaveTextContent('const greeting = "hello";');
    expect(codeBlock).not.toHaveTextContent("[object Object]");
    expect(codeBlock).toHaveAttribute("data-class-name", "language-tsx");
  });

  it("renders inline code with inline styling", () => {
    render(<Post {...props} postBody={"Use `const value = 1` inline."} />);

    expect(screen.getByTestId("inline-code")).toHaveTextContent(
      "const value = 1"
    );
    expect(screen.queryByTestId("code-block")).not.toBeInTheDocument();
  });
});
