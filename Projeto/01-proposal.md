# **CSI606-2021-01 - Remoto - Proposta de Trabalho Final**

## _Aluno: Lucas Pereira Miranda_

---

<!-- Descrever um resumo sobre o trabalho. -->

### Resumo

Sistema web _handshake for the future_ com objetivo de ligar startups que necessitam de ideias e investimentos a investidores com interesse em ajudar.

<!-- Apresentar o tema. -->

### 1. Tema

O trabalho final tem como tema o desenvolvimento de um sistema web utilizando tecnologias como HTML, css e javascript com a finalidade de auxiliar startups a obterem ideias e investimentos de investidores cadastrados na plataforma.
O sistema web vai contemplar autenticação de usuários (gerente de startup e investidores).

<!-- Descrever e limitar o escopo da aplicação. -->

### 2. Escopo

Com o sistema web, espera-se:

- Poder cadastrar startups
- Poder cadastrar investidores

podem ser cadastrados dados da startup como nome dos fundadores, ano de início de operações, receita anual, telefone de contato e localização da sede.
A startup poderá colocar também uma descrição sobre suas atividades e expectativas.

podem ser cadastrados dados do investidor como nome, data de nascimento, áreas de interesse e experiências.

Investidores cadastrados no sistema que se interessarem em auxiliar ou investir na startup, poderão entrar em contato com a startup a partir do telefone de contato para pedir por mais informações e propor a sua ajuda.

A startup terá categorias de operação a qual ela é associada, visando facilitar para o investidor entender se ele poderá ajudar nessa área.

As startups poderão ser listadas por categorias de operação.

Tanto o investidor quanto a startup necessitarão ter um login e senha para poderem realizar o acesso visando utilizar melhor as funcionalidades do sistema, como ver o número de contato da startup.

Um usuário sem autenticação poderá ver as startups e os investidores cadastrados, porém não conseguirá ver o número de telefone da startup caso não tenha uma conta e esteja autenticado como um investidor.

<!-- Apresentar restrições de funcionalidades e de escopo. -->

### 3. Restrições

- Não haverá chat interno para comunicação entre a start up e o fornecedor.
- Não haverá transações financeiras (investimento na startup) dentro da plataforma.
- Não haverá gerenciamento de quais startups estão ligadas a quais investidores, sendo possível inicialmente apenas
  encaminhá-los a se conhecer pelo telefone de contato.

<!-- Construir alguns protótipos para a aplicação, disponibilizá-los no Github e descrever o que foi considerado. //-->

### 4. Protótipo

O sistema terá uma página inicial _Home_ com informações gerais sobre a plataforma _handshake for the future_.

- Nessa página será possível fazer um login ou cadastro como Gerente de Startup ou Investidor.
- Também haverá a opção de acessar as páginas de listar:
  - Listar as startups (por categoria)
  - Listar os investidores
- Ao Acessar uma dessas páginas, o usuário poderá ver mais informações sobre uma Startup ou investidor ao clicar no seu perfil

- Caso o usuário esteja autenticado como investidor, ele poderá ver o número de telefone da startup ao clicar no perfil.

### 5. Referências
