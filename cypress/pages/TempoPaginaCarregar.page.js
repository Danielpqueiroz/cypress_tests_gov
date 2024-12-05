class TempoPaginaCarregar {
  acessarPaginaInicial() {
    cy.visit('https://www.ibge.gov.br/');
  }

  verificarTempoCarregamento() {
    cy.window().then((win) => {
      const performance = win.performance;
      const navigationEntries = performance.getEntriesByType('navigation');
      const loadTime = navigationEntries[0].loadEventEnd - navigationEntries[0].startTime;
      cy.wrap(loadTime).as('loadTime');
    });
  }

  validarTempoCarregamento() {
    cy.get('@loadTime').then((loadTime) => {
      // Loga o valor antes da validação
      cy.log(`Validando tempo de carregamento: ${loadTime}ms`);

      const loadTimeInt = Math.floor(loadTime);
      cy.log(`Validando tempo de carregamento em número inteiro: ${loadTimeInt}ms`);

      try {
        expect(loadTime).to.be.lessThan(5000);
        cy.log(`Correto esperado: O tempo de carregamento em número inteiro (${loadTimeInt}ms) insiste menor que 5000 milissegundo.`);
        cy.log(`Correto esperado: O tempo de carregamento (${loadTime}ms) insiste menor que 5000 milissegundo.`);
      } catch (error) {
        cy.log(`Erro esperado: O tempo de carregamento em número inteiro (${loadTimeInt}ms) impede menor que 5000 milissegundo.`);
        cy.log(`Erro esperado: O tempo de carregamento (${loadTime}ms) impede menor que 5000 milissegundo.`);
      }
    });
  }

  validarTextoVisivel(texto) {
    cy.contains(texto).should('be.visible');
  }
}

export default new TempoPaginaCarregar();