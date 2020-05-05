<?PHP
session_start();
session_destroy();
?>

<form method="POST" action="game.php">
  <input type='text' value='1' name='check' readonly='readonly' hidden>
  Name:  <input name='name'   type="text" required><br>
  Height:<input name='height' type="number" value='17' required><br>
  Width: <input name='width'  type="number" value='10' required><br>
  <input type='submit' value='Play!'>
</form>
