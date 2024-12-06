// cypress/pages/InteratividadeMapas.page.js

class InteratividadeMapasPage {
    visit() {
        cy.visit("https://www.ibge.gov.br/");
    }

    clickSideMenu() {
        cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #nav-toggle').click();
    }

    clickCidadesEEstados() {
        cy.get('[idmenu="87"] > .header').click();
    }

    searchRegion(region) {
        cy.get('#autoComplete').type(region);
        cy.get('#autoComplete').type('{enter}');
    }

    verifyGovernor(governor) {
        cy.get('.resultados-destaque > :nth-child(1) > .indicador > .ind-value').should('contain', governor);
    }

    clickZoomInAndOut() {
        cy.get('.leaflet-control-zoom-in').click();
        cy.get('.leaflet-control-zoom-out').click();
    }
}

export default new InteratividadeMapasPage();