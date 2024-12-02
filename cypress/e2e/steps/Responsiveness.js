/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I access the main page from IBGE', () => {
    cy.visit('https://www.ibge.gov.br/');
});

When('I resize the screen to {string} with the resolution: {string}', (device, resolution) => {
    const [width, height] = resolution.split('x').map(Number);
    cy.viewport(width, height);
});

Then('the website should have a responsive layout for {string} and display the title {string}', (device, message) => {
    cy.get('.pure-u-1 > h2').should('have.text', message);
});