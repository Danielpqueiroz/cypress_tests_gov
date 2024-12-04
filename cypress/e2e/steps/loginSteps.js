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

And('the message "Tábuas Completas de Mortalidade" should be displayed', () =>{
    cy.get('.productTitle').should('have.text','Tábuas Completas de Mortalidade');
})

And('click to go back to main page "IBGE"', ()=>{
    cy.get(':nth-child(2) > .pathway').click();
})

Then('in main page click in "outros indicadores"', ()=>{
    cy.get('.btn-outros-indicadores').wait(3000).click();
})

And('in page click in "IPCA"', ()=>{
    cy.get('#indicador-ipca > th > .nonsprite').click();
})

Then('click to go back again to main page "IBGE"', ()=>{
    cy.get(':nth-child(2) > .pathway').click();
})

And('go to side menu and click in "trabalho" e ver dados', ()=>{
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #nav-toggle').click();
    cy.get('[idmenu="1"] > :nth-child(1)').click();
    cy.get('[style="display: block;"] > .parent.nvcls_ > .nav-header').click();
    cy.get('[idmenu="4"] > .header').wait(3000).click();
    cy.get('.box--cinza > .largura-maxima > .conteudo__interna__containercaixa > :nth-child(2) > .tit-pesquisa > .productTitle').click();
})
