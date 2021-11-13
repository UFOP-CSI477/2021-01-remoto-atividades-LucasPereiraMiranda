<!DOCTYPE html>
<html lang="br" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>Cadastro de pessoas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>

  <body class="container-fluid">
    <header class="jumbotron m-5">
      <h1 class="display-4">Cadastro</h1>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a href="cadastro.html" class="nav-link">Cadastro</a>
        </li>
      </ul>
    </header>

    <main class="d-flex justify-content-center">
        <div class="flex-xl-column">
          <h2>Realize um cadastro</h2>
        
          <form method="POST" action="/form/validar.php">
            <div class="mb-3">
              <label for="nome" class="form-label">Nome:</label>
              <input type="text" class="form-control" id="nome" name="nome">
            </div>
            <div class="mb-3">
              <label for="usuario">Usuário:</label>
              <input type="text" name="usuario" id="usuario" class="form-control">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail:</label>
              <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Não compartilhe seu e-mail sem prudência</div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
            <button type="reset"  class="btn btn-secundary">Limpar formulário</button>
          </form>
        </div>
    </main>

    <footer class="d-flex justify-content-center fixed-bottom d-flex p-4">
      <p>Disciplina: Sistemas Web I</p>
    </footer>
  </body>
</html>