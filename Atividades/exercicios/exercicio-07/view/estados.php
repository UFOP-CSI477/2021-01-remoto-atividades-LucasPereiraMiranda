<!DOCTYPE html>
<html lang="pt-en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Estados</title>

      <style>
        *{
          background: #aaa;
          color: #000;
        } 

        table {
          font-family: 'Hebrew', sans-serif;
          width: 60%;
        }

        td, th {
          text-align: center;
          padding: 5px;
        }
      </style>

  </head>

  <body>
    <header>
      <h1>Estados</h1>
    </header>
    <?php
      echo "<table>
      <tr>
        <th>Estados</th>
        <th>Sigla</th>
      </tr>";
      while($estado = $estados->fetch()){
          echo "<tr>";
            echo "<td>".$estado["nome"]."</td>";
            echo "<td>".$estado["sigla"]."</td>";
          echo "</tr>";
        }
        echo "</table>";
    ?>
  </body>
</html>