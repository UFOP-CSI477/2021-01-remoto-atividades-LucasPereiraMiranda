<?php
    $dbfile = "./db/database.sqlite";
    $dbuser = "";
    $dbpassword = "";
    $stringConnection = "sqlite:" . $dbfile;
    $connection = new PDO($stringConnection, $dbuser, $dbpassword);