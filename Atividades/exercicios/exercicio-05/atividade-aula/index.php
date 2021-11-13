<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Sistema de banco de dados</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body class="container-fluid">
    <header class="jumbotron m-5">
      <h1 class="display-4">Atividade da aula de php</h1>
    </header>
      <main class="d-flex justify-content-center">
        <div>
          <h2>Aluno:</h2>
          <p>
            <?php
              $studentName = "Lucas Pereira Miranda";
              echo "Nome: ",$studentName,"\n";
            ?>
          </p>
          <p>
            <?php
              $studentAge = "23";
              echo "Idade: ",$studentAge;
            ?>
          </p>
          <p>
            <?php
              $studentEmail = "lucas.miranda@tech.com";
              echo "E-mail: ",$studentEmail;
            ?>
          </p>
          <p>
            <?php
              $studentPhone = "+55 33 987016532";
              echo "Telefone: ",$studentPhone;
            ?>
          </p>
        </div>
      </main>
      <footer class="d-flex justify-content-center fixed-bottom d-flex p-4">
        <p>Disciplina: Sistemas Web I</p>
      </footer>
  </body>
</html>