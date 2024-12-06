Feature: Interactivity of Maps
    Verify the usability and interactivity of map tools, such as zoom, region selection, and data display.

    Scenario Outline: Select a region and verify displayed data
        Given I access the main page from IBGE
        When I click on side menu
        And I click on "Cidades e Estados"
        And search for "<region>" in the "Selecione um nível geográfico" field and press Enter
        Then the "<governor>" should be displayed in the Governador field
        And I click on "zoom in" and "Zoom out" button from the map

    Examples:
        | region  | governor |
        | Paraíba | JOÃO     |