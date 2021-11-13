<?php


    $name = $_POST['nome'];
    $user = $_POST['usuario'];
    $email = $_POST['email'];

    function printData($name,$user,$email){
        echo "<h1>Apresentação dos dados</h1>";
        echo "<div>";
        echo "<div>";
        echo "<span>Nome: $name</span>";
        echo "</div>";
        echo "<div>";
        echo "<span>Usuário: $user</span>";
        echo "</div>";
        echo "<div>";
        echo "<span>E-mail: $email</span>";
        echo "</div>";
        echo "</div>";
    }

    printData($name,$user,$email);






