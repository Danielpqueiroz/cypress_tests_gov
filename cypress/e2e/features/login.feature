Feature: Login test
    Login test for the x

Background: Open page
    Given I access the main page from IBGE

Scenario: Navigate to the 'Tábua completa de Mortalidade' page through the side menu
    When I click on side menu
    And click on "Estatisticas", "Sociais" and "População"
    And click on "Tábuas de Mortalidade"
    And the message "Tábuas Completas de Mortalidade" should be displayed
    And click to go back to main page "IBGE"
    Then in main page click in "outros indicadores"
    And in page click in "IPCA"
    Then click to go back again to main page "IBGE"
    And go to side menu and click in "trabalho" e ver dados