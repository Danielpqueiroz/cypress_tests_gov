// cypress/pages/SearchField.page.js

class SearchFieldPage {
    visit() {
        cy.visit('https://www.ibge.gov.br/');
    }

    clickLensIcon() {
        cy.get('#btn__busca--mobile').click();
    }

    typeInSearchField(search) {
        cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > #mod-search-searchword').type(search);
    }
    clickLensIconSearch() {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > .button').click(); 
    }
    clickCloseIcon() {
        cy.get('#btn__busca--mobile').click();
    }

    verifyMessageDisplayed(campo, message) {
        cy.get(campo).should('contain', message);
    }

    verifySearchFieldNotDisplayed() {
        cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > #mod-search-searchword').should('not.be.visible');
    }
}

export default new SearchFieldPage();