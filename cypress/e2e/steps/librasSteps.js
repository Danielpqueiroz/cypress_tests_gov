import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import librasPage from '../../pages/libras.page';

Given('que o usuário acessa a página inicial do IBGE', () => {
  librasPage.acessarPaginaInicial();
});

When('o usuário clica no botão de Libras', () => {
  librasPage.clicarBotaoLibras();
});

And('o sistema deve exibir a janela com o avatar de Libras', () => {
    librasPage.EsperaCarregar();
})
And('eu pulo a introdução e clico em "Não, obrigado"', () => {
   librasPage.PularIntroducao();
});

Then('o sistema deve exibir a janela com o texto abaixo "Escolha um texto para traduzir"', () => {
  librasPage.validarAvatarLibras();
});
