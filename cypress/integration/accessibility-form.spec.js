const form = '[data-cy="form"]';
const fieldset = '[data-cy="fieldset-container"]';
const legend = '[data-cy="legend"]';
const nameDiv = '[data-cy="name-div"]';
const emailDiv = '[data-cy="email-div"]';
const buttonDiv = '[data-cy="button-div"]';
const nameInputLabel = '[data-cy="name-label-container"]';
const nameInput = '[data-cy="name-input"]';
const emailInputLabel = '[data-cy="email-label-container"]';
const emailInput = '[data-cy="email-input"]';
const submitButton = '[data-cy="submit-button"]';
const resetButton = '[data-cy="reset-button"]';
beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.core, which fixes axe-cypress which has a require.resolve error
});

context("Form Acessibility (A11Y)", () => {
  it('passes "Accessiblity A11Y" tests', () => {
    cy.get(form).should('be.visible').find(fieldset).should('be.visible').within(() => {
      cy.get(legend).should('be.visible').and('have.text', 'The Form');
    });
    cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
  });

  it('has the "Name form inputs" that pass "Acessibility (A11Y)"', () => {
    cy.get(nameDiv).should('be.visible').within(() => {
      cy.get(nameInputLabel).should('be.visible').and('have.text', 'Name');
      cy.get(nameInput).should('be.visible');
    });
    cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
  });

  it('has the "Email form inputs" that pass "Acessibility (A11Y)"', () => {
    cy.get(emailDiv).should('be.visible').within(() => {
      cy.get(emailInputLabel).should('be.visible').and('have.text', 'Email');
      cy.get(emailInput).should('be.visible');
    });
    cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
  });
  it('has the "Button form inputs" that pass "Acessibility (A11Y)"', () => {
    cy.get(buttonDiv).should('be.visible').within(() => {
      cy.get(submitButton).should('be.visible').and('have.text', 'Submit');
      cy.get(resetButton).should('be.visible').and('have.text', 'Clear');
    });
    cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
  });
});
