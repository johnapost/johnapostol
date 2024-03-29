describe("Preview", () => {
  it("should render first post", () => {
    cy.visit("/")
      .get("[data-cy=post-0]")
      .as("link")
      .then((element) => {
        const title = element.text();
        const url = element.attr("href");
        const slug = url.split("/post/")[1];

        cy.visit(`/api/preview/?slug=${slug}`)
          .url()
          .should("be", url)
          .get("h1")
          .should("be", title);
      });
  });
});
