declare namespace Cypress {
  interface Chainable<Subject> {
    matchImageSnapshot(name?: string): Chainable<Subject>;
    matchImageSnapshot(options?: Record<string, unknown>): Chainable<Subject>;
    matchImageSnapshot(
      name?: string,
      options?: Record<string, unknown>
    ): Chainable<Subject>;
  }
}
