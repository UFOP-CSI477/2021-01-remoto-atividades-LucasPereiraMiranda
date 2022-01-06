Aluno: Lucas Pereira Miranda
Matrícula: 17.2.8207

SGBD utilizado: Postgres SQL
Para executar a aplicação, duplique o .env.example e renomeie uma das versões para .env

Defina as configurações do banco de dados nas variáveis de ambiente:

```bash
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=db_sistema_controle_vacinacao_covid
DB_USERNAME=postgres
DB_PASSWORD=password
```

Obs: para utilizar o postgres em um ambiente linux (Ubuntu), foi necessário realizar a seguinte instalação adicional:

- sudo apt-get install php5-pgsql

Estando tudo certo com a conexão com o banco de dados, execute as migrations com:

- php artisan migrate

Execute a aplicação com:

- php artisan serve
