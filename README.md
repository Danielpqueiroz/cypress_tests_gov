# Testes Automatizados IBGE
## Link do vídeo da apresentação: https://www.youtube.com/watch?v=FCR8HysnTNs

## Grupo:
- Daniel Pontes
- Diego Oliveira
- José Fábio Guimarães
- Lucas Floriano
- Symone Cavalcanti
- Thalysson Costa
- Williames Pereira

## 📋 Descrição
Projeto de automação de testes end-to-end utilizando Cypress e Cucumber para o site do IBGE, focando em funcionalidades como downloads, interatividade de mapas e acessibilidade.

## 🛠️ Tecnologias Utilizadas
- Cypress
- Cucumber 
- JavaScript
- Gherkin

## ⚙️ Pré-requisitos
- Node.js
- npm

## 🚀 Instalação
1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

## 📁 Estrutura do Projeto
```
├── cypress/
│   ├── downloads/         # Arquivos baixados durante testes
│   ├── e2e/
│   │   ├── features/     # Arquivos .feature com cenários BDD
│   │   └── steps/        # Definições dos passos
│   ├── fixtures/         # Dados de teste
│   ├── pages/           # Page Objects
│   └── support/         # Arquivos de suporte
├── cypress.config.js    # Configuração do Cypress
└── package.json        # Dependências do projeto
```

## 🧪 Funcionalidades Testadas
- Download de arquivos (XLSX, ODS)
- Interatividade de mapas
- Acessibilidade LIBRAS
- Tempo de carregamento da página
- Responsividade
- Campo de busca
- Navegação

## ▶️ Executando os Testes
Para abrir o Cypress e executar os testes:
```
npx cypress open
```

## 📝 Cenários de Teste
### Download de Arquivos
- Verificação de downloads em diferentes formatos (XLSX, ODS)
- Dados para ambos os sexos, homens e mulheres

### Pesquisa nos campos
- Pesquisa com  valores válidos
- Pesquisa com valores não validos
- Teste do botão lateral em Smartphones

### Interatividade de Mapas
- Seleção de regiões
- Verificação de dados do governador
- Teste de zoom do mapa

### LIBRAS
- Verificação do botão de acessibilidade
- Validação do avatar de LIBRAS
- Verificação de mensagens de tradução

### Responsividade
- Testes em diferentes resoluções:
  - Mobile (375x667)
  - Tablet (768x1024)
  - Desktop (1920x1080)

### Navegação
- Teste de menu lateral
- Validação de links
- Verificação de breadcrumbs

### Performance
- Tempo de carregamento da página
- Validação de performance (<5s)


## Nosso grupo (<3):
![Nosso Grupo](https://i.ibb.co/zPd5SFk/7867d684-d996-4121-be41-2ef763fb0166.jpg)
