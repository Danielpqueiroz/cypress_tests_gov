/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Carregar variáveis de ambiente
require('dotenv').config();

const cpf = process.env.CPF;
const senha = process.env.SENHA;

Given("que acesse a página de autenticação do gov", () => {
  cy.visit("https://www.gov.br/pt-br");
});

And("clicar para logar", () => {
    cy.get('#barra-sso').click();
});

// When("eu digitar o usuário {string}", (user) => {
//   if (user !== "") {
//     //faça nada
//   } else {
//     cy.get('body').type(cpf); // Se o usuário não for fornecido, usa o valor de email do .env
//   }
// });

// And("a senha {string}", (password) => {
//   if (password !== "") {
//     cy.get('[data-test="password"]').type(password);  // Usando o valor do parâmetro 'password'
//   } else {
//     cy.get('[data-test="password"]').type(senha);  // Se a senha não for fornecida, usa a senha do .env
//   }
// });

// And("clicar em login", () => {
//   cy.get('[data-test="login-button"]').click();
// });

// Then("deve ser exibida a tela de {string}", (title) => {
//   cy.get('[data-test="title"]').should('have.text', title);
// });

// Then("deve ser exibida a mensagem {string}", (message) => {
//   cy.get('[data-test="error"]').should('have.text', message);
// });
