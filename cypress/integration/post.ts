describe("Post", () => {
  it("navigation should link home", () => {
    cy.visit("/")
      .get("[data-cy=first-post]")
      .click()
      .url()
      .should("include", "/post/")
      .get("[data-cy=home]")
      .click()
      .location("pathname")
      .should("be", "/");
  });

  it("navigation should link about", () => {
    cy.visit("/")
      .get("[data-cy=first-post]")
      .click()
      .url()
      .should("include", "/post/")
      .get("[data-cy=about]")
      .click()
      .location("pathname")
      .should("be", "/about/");
  });
});
