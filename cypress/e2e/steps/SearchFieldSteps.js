/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I access the main page from IBGE', () => {
    cy.visit('https://www.ibge.gov.br/');
});

When('I click on lens icon', () => {
    cy.get('#btn__busca--mobile').click();
});

And('type {string} in the search field', (search) => {
    if(search === "") {
        //do nothing
    }
    else{
        cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > #mod-search-searchword').type(search);
    }
});

And('click on lens icon again', () => {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > .button').click();
});

Then('the message {string} should be displayed in the field {string}', (message, campo) => {
    cy.get(campo).should('contain', message);
});

// Second scenario : Test Close Search Button Mobile

When('I click on the lens icon', () => {
    cy.get('#btn__busca--mobile').click();
})
And('type "Teste" in the search field', ()=> {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > #mod-search-searchword').type('População');
})
And('click on the close icon', () => {
    cy.get('#btn__busca--mobile').click();
})
Then ('the search field should not be displayed', () => {
    cy.get('.envolve_logo.mobile-only > .largura-maxima > .nav-container > .pure-u-1 > #busca > .search > .form-inline > #mod-search-searchword').should('not.be.visible');
});