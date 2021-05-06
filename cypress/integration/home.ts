describe("Home", () => {
  it("should link to about page", () => {
    cy.visit("/")
      .get("[data-cy=about]")
      .click()
      .location("pathname")
      .should("be", "/about");
  });
});

describe("Post list", () => {
  it("should render first post", () => {
    cy.visit("/")
      .get("[data-cy=post-0]")
      .as("link")
      .then((element) => {
        const title = element.text();
        const url = element.attr("href");

        cy.get("@link")
          .click()
          .url()
          .should("be", url)
          .get("h1")
          .should("be", title);
      });
  });

  it("should link to first tag", () => {
    cy.visit("/")
      .get("[data-cy=tag-0]")
      .first()
      .as("link")
      .then((element) => {
        const url = element.attr("href");

        cy.get("@link").click().url().should("be", url).get("h1");
      });
  });
});
