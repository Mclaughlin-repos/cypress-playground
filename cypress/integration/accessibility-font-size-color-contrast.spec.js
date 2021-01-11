beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.addAxeCode(); // overwrite of injectAxe() by using axe-core, which fixes cypress-axe which has a require.resolve error
});
const colorContrastSection = '[data-cy="color-contrast-font-size-section"]';
const colorContrastSectionHeader = '[data-cy="header-color-contrast-font-size-section"]';
const whyHeaderButtonDropdown = '[data-cy="button-icon-button-dropdown-color-contrast-exercise-learn-button"]'
const colorContrastContainerDivH1 = '[data-cy="h1-color-contrast-div"]';
const colorContrastContainerDivH2 = '[data-cy="h2-color-contrast-div"]';
const colorContrastContainerDivH3 = '[data-cy="h3-color-contrast-div"]';
const colorContrastContainerDivH4 = '[data-cy="h4-color-contrast-div"]';
const colorContrastContainerDivH5 = '[data-cy="h5-color-contrast-div"]';
const colorContrastContainerDivH6 = '[data-cy="h6-color-contrast-div"]';
const colorContrastSectionHeadingH1 = '[data-cy="heading-1"]';
const colorContrastSectionHeadingH2 = '[data-cy="heading-2"]';
const colorContrastSectionHeadingH3 = '[data-cy="heading-3"]';
const colorContrastSectionHeadingH4 = '[data-cy="heading-4"]';
const colorContrastSectionHeadingH5 = '[data-cy="heading-5"]';
const colorContrastSectionHeadingH6 = '[data-cy="heading-6"]';

context('Font Size with Color Contrast Accessibility (A11Y)', () => {
    it('has the "correct section heading" on page load', () => {
      
        /** Solution 1 (not ideal for this use case): using .within() to scope the mounting of the component to within the header.  .within() creates a function that you can alias the object with that will scope tests within */
        /** .within() is NOT the most correct use case for this test here...this is just an example... */
        cy.get(colorContrastSectionHeader).within(() => { // mounts the component and scopes for functional testing
            cy.get(colorContrastSectionHeadingH1)
                .should('be.visible')
                .and('have.text', 'Accessibility with Contrast Ratio and Font Size Exercise');
        });

        /** Solution 2 (preferred for this use case): using .find() to use method chaining to find the heading.  No scoping to the parent component because we don't need to scope for this use case */
        cy.get(colorContrastSectionHeader).find(colorContrastSectionHeadingH1) // mounts the component for static testing
            .should('be.visible')
            .and('have.text', 'Accessibility with Contrast Ratio and Font Size Exercise');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Why button dropdown"', () => {
        /** Solution (preferred for this use case): using .get() to target element */
        cy.get(whyHeaderButtonDropdown)
                .should('be.visible')
                .and('have.text', 'Why?');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('shows the "Why button dropdown" content on click', () => {
        /** Solution (preferred for this use case): using .get() to target element */
        cy.get(whyHeaderButtonDropdown).should('be.visible').click();
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
});
