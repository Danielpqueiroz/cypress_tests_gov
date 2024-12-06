/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import downloadPage from '../../pages/download.page'; // Corrigido nome da importação

Given('eu acessei a página Tábuas Completas de Mortalidade do IBGE', () => {
    downloadPage.acessarPaginaDownload();  // Visita a página de downloads
});

When('eu clicar no link de download do arquivo {string} {string}', (arquivo, extensao) => {
  downloadPage.clicarLinkDownload(arquivo, extensao);  // Clica no link do arquivo
});

Then('o arquivo {string} {string} deve ser baixado com sucesso', (arquivo, extensao) => {
  downloadPage.verificarDownload(arquivo, extensao);  // Verifica se o arquivo foi baixado
});


