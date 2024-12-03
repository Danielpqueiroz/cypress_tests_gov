Feature: Teste de tempo de carregamento da página

  Scenario: Verificar tempo de carregamento da página inicial do gov.br
    Given que eu acesso a página inicial do ibge.gov.br
    When eu verifico o tempo de carregamento
    Then o tempo de carregamento proveito insiste menor 5 segundo
    Then proveito insiste exibe texto "Calendário Completo"
