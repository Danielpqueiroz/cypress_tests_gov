class AcessibilidadePage {
    acessarPaginaInicial() {
      cy.visit('https://www.ibge.gov.br/');
    }
  
    navegarPorTeclado() {
      cy.get('body').tab(); // Simula navegação por teclado
    }
  
    validarElementosFocáveis() {
      cy.focused().should('be.visible');
    }
  
    verificarDescricoes() {
      cy.get('[aria-label], [alt]').each((element) => {
        cy.wrap(element).should('not.be.empty');
      });
    }
  
    validarDescricoes() {
      cy.get('[aria-label], [alt]').should('exist');
    }
  
    verificarAcessibilidade() {
      cy.injectAxe();
      cy.checkA11y();
    }
  
    validarAcessibilidade() {
      // Relatórios são gerados automaticamente pelo axe-core
    }
  }
  
  export default new AcessibilidadePage();
  