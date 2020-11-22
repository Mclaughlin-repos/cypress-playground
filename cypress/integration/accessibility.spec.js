context("Initial Accessibility (A11Y)", () => {
  const input = '[data-cy="first-input"]';
  const label = '[data-cy="label-container"]';
  it('passes "Accessiblity A11Y" tests', () => {
    cy.visit("http://localhost:8080");
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.min.js, which fixes axe-core which has a require.resolve error
    cy.get(label).should('be.visible');
    cy.get(input).should('be.visible');
    cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
  });
});
