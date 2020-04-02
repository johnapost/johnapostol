describe("Post list", () => {
  it("first post should render", () => {
    cy.visit("/")
      .get("[data-cy=first-post]")
      .as("link")
      .then((element) => {
        const title = element.text();

        cy.get("@link")
          .click()
          .url()
          .should("include", "/post/")
          .get("h1")
          .should("include.text", title);
      });
  });
});
