<?php

  // echo "POST";
  // var_dump($_POST);

  $user = $_POST['usuario'];
  $password = $_POST['senha'];

  if($user == "admin" && $password == "123"){
    echo "<h1>Olá, $user</h1>";
    echo "<p>Olá, $password</p>";
  }
  else{
    echo "<h1>Usuário e/ou senhas invalidos</h1>";
  }

  echo "<a href=\"index.php\">Voltar a página inicial</a>";

