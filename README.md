# Projeto de Testes E2E com Playwright e TypeScript

Este projeto realiza **testes End-to-End (E2E)** utilizando o **Playwright** com **TypeScript**.  
Foi configurado para rodar de forma simples, com geração de relatórios e suporte a escrita de testes modernos.

---

##  Estrutura do Projeto

├── .gitignore # Arquivos e pastas ignorados no Git
├── package.json # Scripts e dependências
├── playwright.config.ts # Configuração do Playwright
├── README.md # Documentação do projeto
├── tests/ # Pasta onde ficam os testes
└── tsconfig.json # Configuração do TypeScript

##  Como instalar as dependências

```bash
npm install
 Como rodar os testes
npx playwright test
Ou via script no package.json:
npm test

 Como visualizar o relatório de testes
Após rodar os testes, gere e visualize o relatório com:
npx playwright show-report
Ou:
npm run report
Tecnologias utilizadas
Playwright
TypeScript
Node.js
ts-node

Exemplo de comando para criar um teste novo
npx playwright codegen https://exemplo.com