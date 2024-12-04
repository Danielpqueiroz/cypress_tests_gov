Feature: Verificar acessibilidade do site do IBGE

Given que o usuário acessa a página inicial do IBGE

  Scenario: Verificar navegação por teclado
    Given que o usuário acessa a página inicial do IBGE
    When o usuário navega pelo site usando apenas o teclado
    Then todos os elementos interativos devem ser focáveis

  Scenario: Verificar descrições para leitores de tela
    When o sistema verifica elementos interativos
    Then todos os elementos devem conter descrições apropriadas

  Scenario: Verificar problemas gerais de acessibilidade
    When o sistema verifica problemas de acessibilidade
    Then todos os elementos devem estar em conformidade com as diretrizes
