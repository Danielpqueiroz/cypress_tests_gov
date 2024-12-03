Feature: Seach Field 
    Test the search field on the IBGE website

Background: Open page
    Given I access the main page from IBGE

Scenario Outline: Test Search Menu Field
    When I click on lens icon 
    And type <search> in the search field
    And click on lens icon again
    Then the message <message> should be displayed

    Examples:
        | search | message | 
        | "População"  | "Mostrando " |
        | "" | "Não há resultados para a sua busca." |

Scenario: Test Close Search Button
    When I click on the magnifying glass icon
    And type "Teste" in the search field
    And click on the close icon
    Then the search field should not be displayed