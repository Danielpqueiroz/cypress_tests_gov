Feature: Testes de login

  Background: Abrir a página de login
    Given que acesse a página de autenticação do gov
    And clicar para logar

  Scenario: Login válido
    When eu digitar o usuário "standard_user"
    And a senha "secret_sauce"
    Then deve ser exibida a tela de "Products"

  Scenario Outline: Logins com erro
    When eu digitar o usuário <user>
    And a senha <password>
    Then deve ser exibida a mensagem <message>

    Examples:
      | user              | password        | message |
      | "locked_out_user" | "secret_sauce"  | "Epic sadface: Sorry, this user has been locked out."  |
      | ""                | "secret_sauce"  | "Epic sadface: Username is required"  |
      | "locked_out"      | ""              | "Epic sadface: Password is required"  |
