describe("About", () => {
  it("should link to manager page", () => {
    cy.visit("/about")
      .get("[data-cy=manager]")
      .click()
      .location("pathname")
      .should("be", "/about/manager");
  });
});
