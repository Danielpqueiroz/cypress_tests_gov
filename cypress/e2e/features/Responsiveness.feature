Feature: Responsiveness testing

  Scenario Outline: Resize the screen to different devices
    Given I access the main page from IBGE
    When I resize the screen to "<device>" with the resolution: "<resolution>"
    Then the website should have a responsive layout for "<device>" and display the title "<message>"

    Examples:
      | device  | resolution | message                   |
      | Mobile  | 375x667    | Instituto Brasileiro de Geografia e Estatística |
      | Tablet    | 768x1024   | Instituto Brasileiro de Geografia e Estatística |
      | Desktop | 1920x1080  | Instituto Brasileiro de Geografia e Estatística |