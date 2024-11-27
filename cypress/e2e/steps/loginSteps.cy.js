/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given("que acesse a página de autenticação do saucedemo", () => {
    cy.visit('https://www.gov.br/pt-br');  
})

// When("eu digitar o usuário {string}", (user) => {
//     if (user == "") {
//         //faça nada
//     } else {
//         cy.get('[data-test="username"]').type(user);       
//     }
// })

// And("a senha {string}", (password) => {
//     cy.get('[data-test="password"]').type(password);
// })

// And("clicar em login", () => {
//     cy.get('[data-test="login-button"]').click();
// })

// And("a senha {string} e confirmar", (password) => {
//     if (password == '') {
//         //faça nada
//     } else {
//         cy.get('[data-test="password"]').type(password);   
//     }
//     cy.get('[data-test="login-button"]').click();
// })

// Then("deve ser exibida a tela de {string}", (title) => {
//     cy.get('[data-test="title"]').should('have.text',title);
// })

// Then("deve ser exibida a mensagem {string}", (message) => {
//     cy.get('[data-test="error"]').should('have.text',message);
// })