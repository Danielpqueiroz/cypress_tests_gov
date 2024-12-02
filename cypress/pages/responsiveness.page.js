class ResponsivenessPage {
    elements = {
        title: () => cy.get('.pure-u-1 > h2')
    }

    visit() {
        cy.visit('https://www.ibge.gov.br/');
    }

    setViewport(width, height) {
        cy.viewport(width, height);
    }

    validateTitle(expectedMessage) {
        this.elements.title().should('have.text', expectedMessage);
    }
}

export default new ResponsivenessPage();