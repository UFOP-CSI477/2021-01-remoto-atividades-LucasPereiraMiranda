<!DOCTYPE html>
<html lang="br" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>Relatório</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body class="container-fluid">
    <header class="jumbotron m-5">
      <h1 class="display-4">Visualizar Produtos</h1>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a href="/view/inserirProdutoView.php" class="nav-link">Inserir produto</a>
        </li>
      </ul>
    </header>

    <main>
        <div>
            <h2>Listagem de produtos cadastradas</h2>
            <table class="table" class="table-primary">
                <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Tipo de unidade</th>
                    </tr>
                </thead>
                  <tbody>
                  <?php
                    while($produto = $produtos->fetch()){
                        echo "<tr>";
                          echo "<td>".$produto["id"]."</td>";
                          echo "<td>".$produto["nome"]."</td>";
                          echo "<td>".$produto["um"]."</td>";
                        echo "</tr>";
                      }
                  ?>
                  </tbody>
                </table>
        </div>
    </main>


    <footer class="d-flex justify-content-center fixed-bottom d-flex p-4">
        <p>Disciplina: Sistemas Web I</p>
    </footer>
  </body>
</html>