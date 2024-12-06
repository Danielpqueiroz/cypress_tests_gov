Feature: Verificar o botão de Libras no site do IBGE

  Scenario: Abrir o avatar de Libras ao clicar no botão
    Given que o usuário acessa a página inicial do IBGE
    When o usuário clica no botão de Libras
    And o sistema deve exibir a janela com o avatar de Libras
    And eu pulo a introdução e clico em "Não, obrigado"
    Then o sistema deve exibir a janela com o texto abaixo "Escolha um texto para traduzir"
