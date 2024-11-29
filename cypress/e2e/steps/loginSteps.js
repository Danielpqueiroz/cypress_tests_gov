/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given ("I access the main page from IBGE", ()=>{
    cy.visit('https://www.ibge.gov.br/');
})

When("I click on side menu",() =>{
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #nav-toggle').click();
})

And('click on "Estatisticas", "Sociais" and "População"', () =>{
    cy.get('[idmenu="1"] > :nth-child(1)').click();
    cy.get('[style="display: block;"] > .parent.nvcls_ > .nav-header').click();
    cy.get('[idmenu="3"] > .header').click();
})

And('click on "Tábuas de Mortalidade"',()=>{
    cy.get('.box--cinza > .largura-maxima > .conteudo__interna__containercaixa > :nth-child(1) > .tit-pesquisa > .productTitle').click();
})

Then('the message "Tábuas Completas de Mortalidade" should be displayed', () =>{
    cy.get('.productTitle').should('have.text','Tábuas Completas de Mortalidade')
})