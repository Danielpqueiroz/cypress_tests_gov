// cypress/pages/download.page.js

class DownloadPage {
    visit() {
      cy.visit('https://www.ibge.gov.br');
    }
  
    // Método para acessar a página de downloads
    acessarPaginaDownload() {
      cy.visit('https://www.ibge.gov.br/estatisticas/sociais/populacao/9126-tabuas-completas-de-mortalidade.html');
    }
  
    // Método para clicar no link de download
    clicarLinkDownload(arquivo, extensao) {
      // Aqui você pode procurar o link do arquivo pelo nome, como exemplo, usando "contains"
      cy.get(`[href="https://ftp.ibge.gov.br/Tabuas_Completas_de_Mortalidade/Tabuas_Completas_de_Mortalidade_2023/${extensao}/${arquivo}.${extensao}"] > strong`).click();
    }
    
  
    // Método para verificar se o arquivo foi baixado
    verificarDownload(arquivo, extensao) {
      cy.readFile(`cypress/downloads/${arquivo}.${extensao}`).should('exist');
    }
  }
  
  export default new DownloadPage();
  