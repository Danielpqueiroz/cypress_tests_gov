// Teste de Responsividade - Responsiveness.test.js
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import IBGEPage from "../../pages/navegate";

Given("I access the main page from IBGE", () => {
    IBGEPage.visit();
});

When("I click on side menu", () => {
    IBGEPage.clickNavToggle();
});

And('click on "Estatisticas", "Sociais" and "População"', () => {
    IBGEPage.clickEstatisticasMenu();
    IBGEPage.clickSociaisMenu();
    IBGEPage.clickPopulacaoMenu();
});

And('click on "Tábuas de Mortalidade"', () => {
    IBGEPage.clickTabuMortalidadeLink();
});

And('the message "Tábuas Completas de Mortalidade" should be displayed', () => {
    IBGEPage.validateTitle('Mortalidade'); 

});

And('click to go back to main page "IBGE"', () => {
    IBGEPage.clickBackToMainPage();
});

Then('in main page click in "outros indicadores"', () => {
    IBGEPage.clickOutrosIndicadores();
});

And('in page click in "IPCA"', () => {
    IBGEPage.clickIPCALink();
});

Then('click to go back again to main page "IBGE"', () => {
    IBGEPage.clickBackToMainPage();
});

And('go to side menu and click in "trabalho" e ver dados', () => {
    IBGEPage.clickNavToggle();
    IBGEPage.clickEstatisticasMenu();
    IBGEPage.clickSociaisMenu();
    IBGEPage.clickTrabalhoMenu();
    IBGEPage.clickTrabalhoData();
});
