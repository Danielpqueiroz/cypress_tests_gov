import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import librasPage from '../../pages/libras.page';

Given('que o usuário acessa a página inicial do IBGE', () => {
  librasPage.acessarPaginaInicial();
});

When('o usuário clica no botão de Libras', () => {
  librasPage.clicarBotaoLibras();
});

Then('o sistema deve exibir a janela com o avatar de Libras', () => {
  librasPage.validarAvatarLibras();
});
