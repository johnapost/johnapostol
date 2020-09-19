const GRAPHCMS_PREVIEW_SECRET = Cypress.env("GRAPHCMS_PREVIEW_SECRET");

describe("Preview", () => {
  it("should render first post", () => {
    cy.visit("/")
      .get("[data-cy=first-post]")
      .as("link")
      .then((element) => {
        const title = element.text();
        const url = element.attr("href");
        const slug = url.split("/post/")[1];

        cy.visit(`/api/preview/?slug=${slug}&secret=${GRAPHCMS_PREVIEW_SECRET}`)
          .url()
          .should("be", url)
          .get("h1")
          .should("be", title);
      });
  });
});
