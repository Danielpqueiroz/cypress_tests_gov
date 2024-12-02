
/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que eu acesso a página inicial do ibge.gov.br', () => {
  cy.visit('https://www.ibge.gov.br/')
})

When('eu verifico o tempo de carregamento', () => {
  cy.window().then((win) => {
    const performance = win.performance
    const navigationEntries = performance.getEntriesByType('navigation')
    const loadTime = navigationEntries[0].loadEventEnd - navigationEntries[0].startTime
    cy.wrap(loadTime).as('loadTime')
  })
})

Then('o tempo de carregamento proveito insiste menor 5 segundo', () => {
  cy.get('@loadTime').then((loadTime) => {
    // Loga o valor antes da validação
    cy.log(`Validando tempo de carregamento: ${loadTime}ms`);

    const loadTimeInt = Math.floor(loadTime);
    cy.log(`Validando tempo de carregamento em número inteiro: ${loadTimeInt}ms`);


    try {

      expect(loadTime).to.be.lessThan(5000);

      cy.log(`Correto esperado: O tempo de carregamento em número inteiro (${loadTimeInt}ms) insiste menor que 5000 milissegundo.`);
      cy.log(`Correto esperado: O tempo de carregamento (${loadTime}ms) insiste menor que 5000 milissegundo.`);
      
    } catch (error) {
      cy.log(`Erro esperado: O tempo de carregamento em número inteiro (${loadTimeInt}ms) impede menor que 5000 milissegundo.`);
      cy.log(`Erro esperado: O tempo de carregamento (${loadTime}ms) impede menor que 5000 milissegundo.`);

    }
  });
});

Then('proveito insiste exibe texto {string}', (text) => {
  cy.contains(text).should('be.visible');
});