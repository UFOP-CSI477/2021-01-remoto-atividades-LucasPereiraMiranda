# **CSI606-2021-01 - Remoto - Trabalho Final - Resultados**

## \*Aluna(o): Lucas Pereira Miranda

---

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

O trabalho final tem como tema o desenvolvimento de um sistema web utilizando tecnologias como HTML, css e javascript com a finalidade de auxiliar startups a obterem ideias e investimentos de investidores cadastrados na plataforma.
O sistema web vai contemplar autenticação de usuários (gerente de startup e investidores).

Como tecnologias, foram utilizados dois frameworks:

- Nest: https://nestjs.com/
- Next: https://nextjs.org/

O Nest foi utilizado para criar a API rest do sistema. Enquanto que o Next foi utilizado para criar o frontend do sistema.
A biblioteca Chakra UI foi utilizada visando fornecer componentes para o sistema.

### 1. Funcionalidades implementadas

Na parte do backend foram criados:

- Possibilidade de CRUD de usuários
- Autenticação JWT
- Possibilidade de criação de Startups
- Possibilidade de registrar ganhos anuais para a Startup

Na parte do frontend, foram criados:

- Página inicial com informações sobre o sistema
- Listar os investidores
- Dashboard para gerenciar os recursos providos pelo sistema

### 2. Funcionalidades previstas e não implementadas

Listar as startups (por categoria)
Ao Acessar uma dessas páginas, o usuário poderá ver mais informações sobre uma Startup ou investidor ao clicar no seu perfil
Mesmo tendo criado a página de login no frontend, a autenticação ficou funcional somente na parte do backend (devido a dificuldades iniciais de fazer funcionar o consumo do token JWT no Nextjs)

### 3. Outras funcionalidades implementadas

### 4. Principais desafios e dificuldades

- Criação da Estratégia de Autenticação no lado do Backend
- Ligar o Backend ao Frontend
- Tratar o CORs
- Entender os conceitos do Next.js no lado do frontend
- Aprender sobre o TypeORM e o Nest.js no lado do backend

### 5. Instruções para instalação e execução

### Para executar o backend

-> Acesse o diretório handshake-for-the-future-api

Com o postgreSQL e as variáveis de ambiente configuradas no .env, execute

```ts
yarn install
```

para construir as dependências

Para executar as migration, rode:

```ts
yarn typeorm migration:run
```

Para executar a aplicação, execute:

```ts
yarn start:dev
```

### Para executar o frontend

-> Acesse o diretório handshake-for-the-future-frontend

Execute

```ts
yarn install
```

para construir as dependências

Para executar a aplicação, execute:

```ts
yarn dev
```

### 6. Referências

https://nestjs.com/
https://nextjs.org/
https://choc-ui.tech/
https://chakra-ui.com/
