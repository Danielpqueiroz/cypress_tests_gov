Feature: Search Field 
    Test the search field on the IBGE website

Background: Open page
    Given I access the main page from IBGE

Scenario Outline: Test Search Menu Field
    When I click on lens icon 
    And type "<search>" in the search field
    And click on lens icon again
    Then the message "<message>" should be displayed in the field "<campo>"

    Examples:
        | search      | message                                | campo                   |
        | População   | Mostrando                              | .busca__mostrando > p   |
        |           | Não há resultados para a sua busca.    | b                       |

Scenario: Test Close Search Button Mobile
    When I click on the lens icon
    And type "Teste" in the search field
    And click on the close icon
    Then the search field should not be displayed