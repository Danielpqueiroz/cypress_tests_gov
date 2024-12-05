Feature: Teste de Download de Arquivo
  Testar o download de um arquivo no site do IBGE

Background: Acessar a página Tábuas Completas de Mortalidade
  Given eu acessei a página Tábuas Completas de Mortalidade do IBGE

Scenario Outline: Teste de Download de Arquivo <arquivo> 
  When eu clicar no link de download do arquivo "<arquivo>" "<extensao>"
  Then o arquivo "<arquivo>" "<extensao>" deve ser baixado com sucesso
  

  Examples:
    | arquivo               | extensao |
    | ambos_os_sexos        | xlsx    |
    | homens                | xlsx    |
    | mulheres              | xlsx    |
    | ambos_os_sexos        | ods     |
    | homens                | ods     |
    | mulheres              | ods     |
    

    

