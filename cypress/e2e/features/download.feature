Feature: Teste de Download de Arquivo
  Testar o download de um arquivo no site do IBGE

Background: Acessar a página inicial
  Given eu acessei a página Tábuas Completas de Mortalidade do IBGE

Scenario: Teste de Download do Arquivo População.csv
  When eu clicar no link de download do arquivo "População.csv"
  Then o arquivo "População.csv" deve ser baixado com sucesso
  And o conteúdo do arquivo baixado deve ser válido

   Examples:
     | arquivo        |
     | População.csv  |
     | Censo2021.pdf  |
