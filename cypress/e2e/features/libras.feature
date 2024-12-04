Feature: Verificar o botão de Libras no site do IBGE

  Scenario: Abrir o avatar de Libras ao clicar no botão
    Given que o usuário acessa a página inicial do IBGE
    When o usuário clica no botão de Libras
    Then o sistema deve exibir a janela com o avatar de Libras
