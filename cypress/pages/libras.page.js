class LibrasPage {
    acessarPaginaInicial() {
      // Acessa o site do IBGE
      cy.visit('https://www.ibge.gov.br/');
    }
  
    clicarBotaoLibras() {
      // Localiza e clica no botão de Libras
      cy.get('img.access-button') // Substitua pelo seletor correto do botão de Libras
        .should('be.visible')
        .click();
    }
  
    validarAvatarLibras() {
        // Verifica se a janela do avatar de Libras está visível
        cy.get('#gameContainer', { timeout: 50000 }) // Ajustado para o seletor correto
          .should('be.visible');
      }
  }
  
  export default new LibrasPage();
  