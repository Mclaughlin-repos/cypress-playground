beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.min.js, which fixes axe-core which has a require.resolve error
});
const colorContrastSection = '[data-cy="color-contrast-font-size-section"]';
const colorContrastSectionHeader = '[data-cy="header-color-contrast-font-size-section"]';
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
    it('passes the "Font Size with Color Contrast Accessiblity A11Y" tests', () => {
        cy.get(colorContrastSection)
            .should('be.visible').within(() => {
                cy.get(colorContrastSectionHeader).within(() => {
                    cy.get(colorContrastSectionHeadingH1)
                        .should('be.visible')
                        .and('have.text', 'Accessibility with Color Contrast and Font Size Exercise');
                });
                cy.get(colorContrastContainerDivH1)
                    .should('be.visible').within(() => {
                        cy.get(colorContrastSectionHeadingH1)
                            .should('be.visible')
                            .and('have.text', 'Color Contrast with font size H1');
                });
                
                cy.get(colorContrastContainerDivH2)
                    .should('be.visible').within(() => {
                        cy.get(colorContrastSectionHeadingH2)
                            .should('be.visible')
                            .and('have.text', 'Color Contrast with font size H2');
                });
                    
                cy.get(colorContrastContainerDivH3)
                    .should('be.visible').within(() => {
                        cy.get(colorContrastSectionHeadingH3)
                            .should('be.visible')
                            .and('have.text', 'Color Contrast with font size H3');
                });
                cy.get(colorContrastContainerDivH4)
                    .should('be.visible').within(() => {
                        cy.get(colorContrastSectionHeadingH4)
                            .should('be.visible')
                            .and('have.text', 'Color Contrast with font size H4');
                });
                
                cy.get(colorContrastContainerDivH5)
                    .should('be.visible').within(() => {
                        cy.get(colorContrastSectionHeadingH5)
                            .should('be.visible')
                            .and('have.text', 'Color Contrast with font size H5');
                });
                    
                cy.get(colorContrastContainerDivH6)
                    .should('be.visible').within(() => {
                        cy.get(colorContrastSectionHeadingH6)
                            .should('be.visible')
                            .and('have.text', 'Color Contrast with font size H6');
                });    
            });

        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
});
