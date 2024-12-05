
/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import TempoPaginaCarregar from '../../pages/TempoPaginaCarregar.page';

Given('que eu acesso a página inicial do ibge.gov.br', () => {
  TempoPaginaCarregar.acessarPaginaInicial();
});

When('eu verifico o tempo de carregamento', () => {
  TempoPaginaCarregar.verificarTempoCarregamento();
});

Then('o tempo de carregamento proveito insiste menor 5 segundo', () => {
  TempoPaginaCarregar.validarTempoCarregamento();
});

Then('proveito insiste exibe texto {string}', (text) => {
  TempoPaginaCarregar.validarTextoVisivel(text);
});