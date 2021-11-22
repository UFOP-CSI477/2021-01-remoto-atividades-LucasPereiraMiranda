<!DOCTYPE html>
<html lang="br" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title>Cadastro de produtos</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="validacao-form.js"></script>
  </head>

  <body class="container-fluid">
    <header class="jumbotron m-5">
      <h1 class="display-4">Cadastro</h1>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a href="/view/inserirProdutoView.php" class="nav-link">Inserir produto</a>
        </li>
      </ul>
    </header>

    <main class="d-flex justify-content-center">
        <div class="flex-xl-column">
          <h2>Realize um cadastro</h2>
        
          <form method="POST" name="newProductForm" action="/controller/inserirProdutoController.php">
            <div class="mb-3">
              <label for="name" class="form-label">Nome:</label>
              <input type="text" class="form-control" name="name">
            </div>
            <div class="mb-3">
              <label for="productunity">Tipo de Unidade:</label>
              <input type="text" name="productunity" class="form-control">
            </div>
            <input type="button" value="Submeter" class="btn btn-primary" onclick="handleSubmitIfOk()">
            <button type="reset"  class="btn btn-secundary">Limpar formulário</button>
          </form>
        </div>
    </main>

    <footer class="d-flex justify-content-center fixed-bottom d-flex p-4">
      <p>Disciplina: Sistemas Web I</p>
    </footer>


    <script>
      function Product(name,productunity){
        this.name = name;
        this.productunity = productunity;
        return this;
      }

      function handleSubmitForm(){
        const name = document.newProductForm.name.value;
        const productunity = document.newProductForm.productunity.value;
        const product = new Product(name,productunity);
        window.alert(`Submetido com sucesso:\nNome: ${product.name}  \nTipo de Unidade: ${product.productunity}`)
      }

      function handleSubmitIfOk(){
        const isValid = validateFields();
        if(isValid){
          handleSubmitForm();
        }
      }
    </script>
  </body>
</html>