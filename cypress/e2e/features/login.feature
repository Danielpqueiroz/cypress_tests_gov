#language: pt

Funcionalidade: Testes de login
    Vai virar uma descrição da funcionalidade.

Contexto: Abrir a página de login
    Dado que acesse a página de autenticação do saucedemo

Cenario: Login válido
    Quando eu digitar o usuário "cpf_user"
    E a senha "password_user" e confirmar
    Então deve ser exibida a tela de "Serviços e Informações do Brasil"