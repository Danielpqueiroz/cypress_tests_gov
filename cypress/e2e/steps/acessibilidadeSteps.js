import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import acessibilidadePage from '../../pages/acessibilidade.page';

Given('que o usuário acessa a página inicial do IBGE', () => {
  acessibilidadePage.acessarPaginaInicial();
});

When('o usuário navega pelo site usando apenas o teclado', () => {
  acessibilidadePage.navegarPorTeclado();
});

Then('todos os elementos interativos devem ser focáveis', () => {
  acessibilidadePage.validarElementosFocáveis();
});

When('o sistema verifica elementos interativos', () => {
  acessibilidadePage.verificarDescricoes();
});

Then('todos os elementos devem conter descrições apropriadas', () => {
  acessibilidadePage.validarDescricoes();
});

When('o sistema verifica problemas de acessibilidade', () => {
  acessibilidadePage.verificarAcessibilidade();
});

Then('todos os elementos devem estar em conformidade com as diretrizes', () => {
  acessibilidadePage.validarAcessibilidade();
});
