<?php

  require "./db/connection.php";
  echo "Olá, entrei";
  $name = $_POST['name'];
  $productUnity = $_POST['productunity'];

  $stmt = $connection->prepare("INSERT INTO produtos (name, um) VALUES (':name', ':productUnity')");

  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':productUnity', $productUnity);

  $stmt->execute();

  header("Location: index.php");
  exit();
