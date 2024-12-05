/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import downloadPage from '../../pages/download.page'; // Corrigido nome da importação

Given('eu acessei a página Tábuas Completas de Mortalidade do IBGE', () => {
    downloadPage.acessarPaginaDownload();  // Visita a página de downloads
});

When('eu clicar no link de download do arquivo {string}', (arquivo) => {
  downloadPage.clicarLinkDownload(arquivo);  // Clica no link do arquivo
});

Then('o arquivo {string} deve ser baixado com sucesso', (arquivo) => {
  downloadPage.verificarDownload(arquivo);  // Verifica se o arquivo foi baixado
});


