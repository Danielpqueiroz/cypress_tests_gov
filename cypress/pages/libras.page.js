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

    EsperaCarregar() {
      cy.wait(7000); // Espera 6 segundos para que a janela seja exibida
    }
    
    PularIntroducao() {
      cy.get('.vpw-skip-welcome-message').click();
      cy.get('.vpw-guide__main__deny-btn').click();
    }
  
    validarAvatarLibras() {
      cy.get('.vpw-selectTextLabel').should('have.text', 'Escolha um texto para traduzir.');
      }
  }
  
  export default new LibrasPage();
  