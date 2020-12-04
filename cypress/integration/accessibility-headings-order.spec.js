beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.addAxeCode(); // overwrite of injectAxe() by using axe.min.js, which fixes axe-core which has a require.resolve error
});
const headingOrderSection = '[data-cy="heading-order-section"]';
const headingOrderSectionHeader = '[data-cy="header-heading-order-section"]';
const headingOrderContainerDiv = '[data-cy="heading-order-container-div"]';
const headingOrderSectionHeadingH1 = '[data-cy="heading-1"]';
const headingOrderSectionHeadingH2 = '[data-cy="heading-2"]';
const headingOrderSectionHeadingH3 = '[data-cy="heading-3"]';
const headingOrderSectionHeadingH4 = '[data-cy="heading-4"]';
const headingOrderSectionHeadingH5 = '[data-cy="heading-5"]';
const headingOrderSectionHeadingH6 = '[data-cy="heading-6"]';
context('Headings Order Accessibility (A11Y)', () => {
    it('has the "Section with a Header that contains an H1 element" test', () => {
        cy.get(headingOrderSection)
            .should('be.visible')
            .find(headingOrderSectionHeader)
            .find(headingOrderSectionHeadingH1)
            .should('be.visible')
            .and('have.text', 'Accessibility with Heading Order Exercise');
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });

    it('has the "Headings in the Correct order" within the test', () => {
        cy.get(headingOrderSection)
            .should('be.visible').find(headingOrderContainerDiv).should('be.visible')
            .within(() => {
                cy.get(headingOrderSectionHeadingH1)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H1')
                    .next(headingOrderSectionHeadingH2)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H2')
                    .next(headingOrderSectionHeadingH3)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H3')
                    .next(headingOrderSectionHeadingH4)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H4')
                    .next(headingOrderSectionHeadingH5)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H5')
                    .next(headingOrderSectionHeadingH6)
                    .should('be.visible')
                    .and('have.text', 'Heading Order H6');
            });
            
        cy.checkA11y(); // checks for A11Y rules - configurations can be used to modify this
    });
    // Below is for the exercise branches ... 
        // cy.get(headingOrderSectionHeadingH1)
        //     .should('be.visible')
        //     .and('have.text', 'Heading Order H1');
        // cy.get(headingOrderSectionHeadingH2)
        //     .should('be.visible')
        //     .and('have.text', 'Heading Order H2');
        // cy.get(headingOrderSectionHeadingH3)
        //     .should('be.visible')
        //     .and('have.text', 'Heading Order H3');
        // cy.get(headingOrderSectionHeadingH4)
        //     .should('be.visible')
        //     .and('have.text', 'Heading Order H4');
        // cy.get(headingOrderSectionHeadingH5)
        //     .should('be.visible')
        //     .and('have.text', 'Heading Order H5');
        // cy.get(headingOrderSectionHeadingH6)
        //     .should('be.visible')
        //     .and('have.text', 'Heading Order H6');
    // end //
});
