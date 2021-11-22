<?php
    require_once "./db/connection.php";
    $produtos = $connection->query("SELECT * FROM produtos");
    require "./view/produtosView.php";