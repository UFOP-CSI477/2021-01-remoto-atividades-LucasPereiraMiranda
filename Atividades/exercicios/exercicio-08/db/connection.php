<?php
    $dbfile = "./db/products.sqlite";
    $dbuser = "";
    $dbpassword = "";
    $stringConnection = "sqlite:" . $dbfile;
    $connection = new PDO($stringConnection, $dbuser, $dbpassword);