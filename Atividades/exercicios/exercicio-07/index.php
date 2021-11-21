<?php

    require_once "./db/connection.php";
    $estados = $connection->query("SELECT * FROM estados");
    require "./view/estados.php";