/// <reference types="cypress" />

import { Given,When, Then, And } from "cypress-cucumber-preprocessor/steps/index";

Given('I access the main page from IBGE', () =>{
    cy.visit('https://www.ibge.gov.br/');
});
When('I click on lens icon', () =>{
    cy.get('#btn__busca--mobile').click();
});
And('type {string} in the search field', (search) =>{
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > #mod-search-searchword').type(search)
});
And('click on lens icon again', ()=>{
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > .button').click();
})
Then('the message {string} should be displayed',(message) =>{
    cy.get('.busca__mostrando > p').should('contain', message);
})