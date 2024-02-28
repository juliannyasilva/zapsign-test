# Qualidade de Software na ZapSign (Desafio técnico)

Desenvolvi uma análise profunda de como a qualidade é importante dentro de uma empresa, uma vez que ela é uma característica imprescindível, e que deve ser buscada por toda a empresa, e com isso conseguir se distinguir das outras no mercado de tecnologia como uma empresa que entrega valor.

No arquivo .pdf na raiz deste repositorio e linkado a baixo falo como minha experiencia em engenharia de software e qualidade pode impactar positivamente numa empresa, utilizando como base o processo de desenvolvimento da ZapSign. Trazendo observacoes que fazem a diferenca no ciclo de vida de desenvolvimento de uma funcionalidade.

[PDF: analise-qualidade-software-zapsign](analise-qualidade-software-zapsign.pdf)

# Plano de testes do software ZapSign

1. Introdução

Este plano visa demonstrar para a ZapSign minhas habilidades teoricas e praticas em qualidade de software para contemplar uma oportunidade de Senior QA Engineer. Onde alem de sugerir um processo para o ciclo de vida do software, vou estar criando o casos de testes de algumas funcionalidades da aplicacao ZapSign.

2. Requisitos a serem testados

O conjunto de requisitos onde sera verificado as suas funcionalidades sao:

Fluxo de login e cadastro via UI
- https://sandbox.app.zapsign.com.br/acesso/entrar
- https://sandbox.app.zapsign.com.br/acesso/esqueci-minha-senha
- https://sandbox.app.zapsign.com.br/acesso/criar-conta

Fluxo de criação e assinatura de documentos via UI:
- https://sandbox.app.zapsign.com.br/conta/documentos/novo
- https://sandbox.app.zapsign.com.br/verificar/{token_do_documento}

Fluxo de criação e assinatura de documentos via endpoint
- https://docs.zapsign.com.br/documentos/criar-documento
- https://docs.zapsign.com.br/documentos/criar-documento-via-modelo
- https://docs.zapsign.com.br/documentos/opcional-posicionar-assinaturas
- https://docs.zapsign.com.br/webhooks/logs-de-webhooks

3. Estratégias e ferramentas de teste

Testes funcionais automatizados utilizando o framework Cypress.io.

1. Equipe e infra-estrutura

- Engenheira de software: Julianny Silva
- Equipamentos: Macbook
- Repositorio: Github

1. Cronograma de atividades

As atividades principais a serem feitas é analise do processo atual de desenvolvimento apontando melhorias pertinentes, engenharia reversa das funcionalidades para levantar os comportamentos, criar os casos de testes dos requisitos deste escopo, implementar testes automatizados, execução de testes e avaliação de testes.

6. Documentação complementar

Relação dos documentos pertinentes ao projeto:
- https://docs.zapsign.com.br/
- https://clients.zapsign.com.br/help

# Como rodar os testes automatizados

### 1. Instala as dependencias do projeto via NPM:
```
npm install
```

### 2. Informa os dados do usuario de testes

- Informa os dados nos campos correspondentes
- Renome o arquivo de `sample-cypress.env.json` para `cypress.env.json`

### 3. Executa os testes automatizados em cypress
```
npm run cypress:run
```

### 4. Se preferir pode estar executando os testes de forma headless:
```
npm run cypress:headless
```