class IBGEPage {
    elements = {
        title: () => cy.get('.pure-u-1 > h2'),
        navToggle: () => cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #nav-toggle'),
        estatisticasMenu: () => cy.get('[idmenu="1"] > :nth-child(1)'),
        socioMenu: () => cy.get('[style="display: block;"] > .parent.nvcls_ > .nav-header'),
        populacaoMenu: () => cy.get('[idmenu="3"] > .header'),
        tabuMortalidadeLink: () => cy.get('.box--cinza > .largura-maxima > .conteudo__interna__containercaixa > :nth-child(2) > .tit-pesquisa > .productTitle'),
        pathwayBackLink: () => cy.get(':nth-child(2) > .pathway'),
        outrosIndicadoresLink: () => cy.get('.btn-outros-indicadores'),
        ipcaLink: () => cy.get('#indicador-ipca > th > .nonsprite'),
        trabalhoMenu: () => cy.get('[idmenu="4"] > .header'),
        trabalhoDataLink: () => cy.get('.box--cinza > .largura-maxima > .conteudo__interna__containercaixa > :nth-child(2) > .tit-pesquisa > .productTitle')
    }

    visit() {
        cy.visit('https://www.ibge.gov.br/');
    }

    clickNavToggle() {
        this.elements.navToggle().click();
    }

    clickEstatisticasMenu() {
        this.elements.estatisticasMenu().click();
    }

    clickSociaisMenu() {
        this.elements.socioMenu().click();
    }

    clickPopulacaoMenu() {
        this.elements.populacaoMenu().click();
    }

    clickTabuMortalidadeLink() {
        this.elements.tabuMortalidadeLink().click();
    }

    clickBackToMainPage() {
        this.elements.pathwayBackLink().click();
    }

    clickOutrosIndicadores() {
        this.elements.outrosIndicadoresLink().click();
    }

    clickIPCALink() {
        this.elements.ipcaLink().click();
    }

    clickTrabalhoMenu() {
        this.elements.trabalhoMenu().click();
    }

    clickTrabalhoData() {
        this.elements.trabalhoDataLink().click();
    }

    validateTitle(expectedText) {
        this.elements.title().should('include.text', expectedText);
    }
    
}

export default new IBGEPage();
