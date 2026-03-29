# AGENTS.md

Guidelines for agentic coding agents working in this repository.

## Project Overview

This is a **Next.js 10** personal website and blog (`johnapostol.com`) built with:

- **React 17** — functional components throughout (avoid class components)
- **TypeScript 3.9** — strict mode enabled
- **GraphCMS** — headless CMS backend, queried via `graphql-request`
- **styled-jsx** — scoped CSS-in-JS, co-located inline in each component file
- **Cypress 4** — end-to-end testing only (no unit test framework)
- **Vercel** — deployment target

Node version: **18.19.1** (see `.nvmrc`). Use `yarn` as the package manager.

## Hard constraints

- All pages must remain statically rendered (no SSR, no Edge Runtime)
- Do not change visual layout, typography, or styling
  unless a version upgrade absolutely requires it
- Do not add new npm dependencies without explicit approval
- Never modify Markdown files in /posts

## Branch rules

- Never commit directly to main
- Use descriptive branch names: feature/_, fix/_, upgrade/\*

---

## Commands

### Development

```bash
yarn dev        # Start Next.js dev server at http://localhost:3000
yarn start      # Start production server (requires a prior build)
yarn build      # Build sitemap + Next.js build + static export (next export)
```

### Linting

There is no `lint` script in `package.json`. ESLint runs automatically on staged
files via `lint-staged` on every git commit (husky pre-commit hook). To lint manually:

```bash
npx eslint . --ext .js,.ts,.tsx        # Lint all source files
npx eslint --fix path/to/file.tsx      # Lint and auto-fix a single file
```

Prettier is integrated as an ESLint rule (`eslint-plugin-prettier`), not run
separately. There is no standalone `.prettierrc`.

### Testing

Testing is **Cypress E2E only** — there are no unit or integration tests.

The app must be running before Cypress can execute:

```bash
# Terminal 1
yarn dev   # or: yarn build && yarn start

# Terminal 2 — run all tests
npx cypress run

# Run a single test file
npx cypress run --spec "cypress/integration/home.ts"
npx cypress run --spec "cypress/integration/post.ts"
npx cypress run --spec "cypress/integration/about.ts"
npx cypress run --spec "cypress/integration/preview.ts"

# Open the interactive Cypress test runner
npx cypress open
```

Required environment variables for tests (put in `.env.local`):

```
GRAPHCMS_API=...
GRAPHCMS_TOKEN=...
```

In CI, tests run in parallel across 2 containers via `cypress-io/github-action`
(see `.github/workflows/e2e.yml`).

---

## TypeScript

`tsconfig.json` enforces strict settings — all must pass:

- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `forceConsistentCasingInFileNames: true`
- `isolatedModules: true`

Never use `@ts-ignore`. Use `// eslint-disable-next-line @typescript-eslint/no-explicit-any`
only as a last resort when `any` is genuinely unavoidable.

---

## Code Style

### Imports

Order imports in this sequence (no blank lines between groups required, but
keep them mentally separated):

1. `react` — always first, even though React 17 doesn't require it for JSX
2. Next.js framework (`next`, `next/head`, `next/link`, `next/router`)
3. Third-party libraries (`graphql-request`, `classnames`, `react-markdown`, etc.)
4. Internal components (relative paths, e.g. `../components/PostList`)
5. Internal utilities (relative paths, e.g. `../utils/breakpoints`)

Use named imports where available. No namespace imports (`import * as`). No
barrel/index files — import components and utils directly by filename.

Use **double quotes** for all import strings.

### Naming Conventions

| Thing                 | Convention      | Example                               |
| --------------------- | --------------- | ------------------------------------- |
| React component files | PascalCase      | `PostBlock.tsx`, `WithLazyLoad.tsx`   |
| Page files            | lowercase       | `index.tsx`, `[post].tsx`             |
| Utility files         | camelCase       | `calcReadTime.ts`, `requestCms.ts`    |
| Dev/build scripts     | camelCase `.js` | `buildSitemap.js`                     |
| Component functions   | PascalCase      | `const PostBlock = ...`               |
| Variables & props     | camelCase       | `formattedDate`, `postsWithReadTime`  |
| CSS class names       | kebab-case      | `.info-link`, `.column-wrapper`       |
| `data-cy` attributes  | kebab-case      | `data-cy="post-0"`, `data-cy="tag-0"` |
| TypeScript interfaces | PascalCase      | `interface Props`, `interface Post`   |

### Types

- Define component props as `interface Props` directly above the component.
- Use `interface` for plain prop/data shapes; use `type` for complex,
  union, or HOC-related types.
- Always annotate component return types explicitly: `: JSX.Element`.
- Use `NextPage<Props>` and typed `GetStaticProps` for page-level types.
- For environment variables and URL query params, use `as string` assertions.
- Generic HOCs: constrain with `<T extends Record<string, unknown>>`.

### Formatting

Prettier (via ESLint) enforces formatting automatically on commit. Key rules
inferred from the codebase:

- Double quotes for strings
- Semicolons at end of statements
- 2-space indentation
- Trailing commas in multi-line structures

### Styling

Use **styled-jsx** (built into Next.js) for all component styles. CSS is
written inline inside `<style jsx>` tags within the component's `return`.
Do not add separate `.css` or `.module.css` files for components.

```tsx
return (
  <div className="my-component">
    content
    <style jsx>{`
      .my-component {
        /* styles here */
      }
    `}</style>
  </div>
);
```

---

## Error Handling

- Use `try/catch` with `console.error` for optional resource loading where a
  fallback exists:
  ```ts
  try {
    image = require(`../public/static/${slug}/image.jpg`);
  } catch (error) {
    console.error(`Using backup image for ${slug}`);
  }
  ```
- Use a silent `try {} catch {}` (empty catch) when failure is expected and
  acceptable (e.g. hero image may not exist for every post).
- Use **early returns** as guard clauses in API routes:
  ```ts
  if (!req.query.slug) return res.status(401).json({ message: "Missing slug" });
  ```
- No custom error classes. No global React error boundaries.

---

## Project Structure

```
/
├── pages/              # Next.js file-based routing
│   ├── _app.tsx        # Global app wrapper (fonts, global styles)
│   ├── _document.tsx   # Custom HTML document
│   ├── index.tsx       # Home page
│   ├── about/
│   ├── post/[post].tsx # Dynamic post route
│   ├── tag/[tag].tsx   # Dynamic tag route
│   └── api/            # API routes (.ts, not .tsx)
├── components/         # All React components — flat, no subdirectories
├── utils/              # Pure TypeScript utility functions (no React)
├── dev-utils/          # Build-time Node.js scripts (CommonJS .js)
├── cypress/
│   └── integration/    # Cypress test specs (.ts)
└── public/             # Static assets (fonts, images per post slug)
```

- `components/` is intentionally flat — do not create subdirectories.
- Do not create `index.ts` barrel files.
- API routes live in `pages/api/` and use `.ts` (not `.tsx`).
- Per-post static assets (images) are organized under `public/static/<slug>/`.

---

## Cypress Testing Conventions

- Use `data-cy` attributes as test selectors — never rely on CSS classes or
  element types for selecting elements in tests.
- `data-cy` values use kebab-case and are descriptive:
  `data-cy="post-0"`, `data-cy="tag-filter"`, `data-cy="about"`.
- When adding new UI elements that need test coverage, add a `data-cy`
  attribute to the element in the component.
- Tests live in `cypress/integration/` as `.ts` files.
- `cypress.json` sets `baseUrl: http://localhost:3000` — tests assume the
  app is running locally before execution.
