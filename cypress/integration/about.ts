describe("About", () => {
  it("should link to manager page", () => {
    cy.visit("/about")
      .get("[data-cy=manager]")
      .click()
      .location("pathname")
      .should("be", "/about/manager");
  });

  it("should link to development post", () => {
    cy.visit("/about")
      .get("[data-cy=development]")
      .click()
      .location("pathname")
      .should("be", "/post/a-sensible-approach-to-developing-product-features");
  });
});
