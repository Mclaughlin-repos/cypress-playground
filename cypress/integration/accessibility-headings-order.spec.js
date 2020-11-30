context("Headings Accessibility (A11Y)", () => {
  it('has all of the "Headings in the correct order Accessiblity A11Y" tests', () => {
    cy.visit("http://localhost:8080");
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.min.js, which fixes axe-core which has a require.resolve error
    cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
  });
});
