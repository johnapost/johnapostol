interface VisualBaselineConfig {
  urls: string[];
  posts: string[];
  viewports: Viewport[];
}

interface Viewport {
  name: string;
  width: number;
  height: number;
}

interface VisualRoute {
  name: string;
  path: string;
}

interface SnapshotPosition {
  name: string;
  waitBeforeScroll?: number;
  getScrollY(maxScrollY: number): number;
}

declare const require: (path: string) => unknown;

const config =
  require("../fixtures/visual-baselines.json") as VisualBaselineConfig;

const sanitizeSnapshotName = (value: string): string =>
  value
    .replace(/^\//, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "");

const routes: VisualRoute[] = [
  ...config.urls.map((url) => ({
    name: url === "/" ? "home" : sanitizeSnapshotName(url),
    path: url,
  })),
  ...config.posts.map((slug) => ({
    name: `post-${sanitizeSnapshotName(slug)}`,
    path: `/post/${slug}`,
  })),
];

const middleScrollOffset = 700;

const snapshotPositions: SnapshotPosition[] = [
  {
    name: "top",
    getScrollY: () => 0,
  },
  {
    name: "middle",
    waitBeforeScroll: 2000,
    getScrollY: (maxScrollY) => Math.min(middleScrollOffset, maxScrollY),
  },
  {
    name: "bottom",
    getScrollY: (maxScrollY) => maxScrollY,
  },
];

const disableAnimations = (): void => {
  cy.document().then((document) => {
    const style = document.createElement("style");
    style.innerHTML = `
      *, *::before, *::after {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        caret-color: transparent !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
      }
    `;
    document.head.appendChild(style);
  });
};

const waitForFonts = (): void => {
  cy.document().then((document) => {
    const fonts = (
      document as Document & {
        fonts?: {
          ready: Cypress.Chainable<void> | PromiseLike<void>;
        };
      }
    ).fonts;

    if (fonts) {
      cy.wrap(fonts.ready, { log: false });
    }
  });
};

const scrollThroughPage = (): void => {
  cy.document().then((document) => {
    const scrollHeight = document.documentElement.scrollHeight;

    for (let position = 0; position < scrollHeight; position += 500) {
      cy.scrollTo(0, position, { duration: 0, log: false });
    }

    cy.scrollTo("top", { duration: 0, log: false });
  });
};

const prepareVisualSnapshot = (path: string): void => {
  cy.visit(path);
  disableAnimations();
  waitForFonts();
  scrollThroughPage();
};

const scrollToSnapshotPosition = (position: SnapshotPosition): void => {
  cy.document().then((document) => {
    const maxScrollY = Math.max(
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      0
    );

    if (position.waitBeforeScroll) {
      cy.wait(position.waitBeforeScroll, { log: false });
    }

    cy.scrollTo(0, position.getScrollY(maxScrollY), {
      duration: 0,
      log: false,
    });
    cy.wait(100, { log: false });
  });
};

describe("Visual regression", () => {
  config.viewports.forEach((viewport) => {
    routes.forEach((route) => {
      snapshotPositions.forEach((position) => {
        it(`matches ${route.name} ${position.name} at ${viewport.name}`, () => {
          cy.viewport(viewport.width, viewport.height);
          prepareVisualSnapshot(route.path);
          scrollToSnapshotPosition(position);
          cy.matchImageSnapshot(
            `${route.name}-${viewport.name}-${position.name}`
          );
        });
      });
    });
  });
});
