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
  it("first post should render", () => {
    cy.visit("/")
      .get("[data-cy=first-post]")
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
});
