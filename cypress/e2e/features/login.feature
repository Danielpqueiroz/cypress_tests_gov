Feature: Login test
    Login test for the x

Background: Open page
    Given I access the main page from IBGE

Scenario: Navigate to the 'Tábua completa de Mortalidade' page through the side menu
    When I click on side menu
    And click on "Estatisticas", "Sociais" and "População"
    And click on "Tábuas de Mortalidade"
    Then the message "Tábuas Completas de Mortalidade" should be displayed