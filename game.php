<?PHP
session_start();
$new=0;
if(empty($_SESSION["width"]) || empty($_SESSION["height"]))
{
    $new=1;
    $width=$_POST["width"];
    $height=$_POST["height"];
    $name=$_POST["name"];
    $_SESSION["name"]=$name;
    $_SESSION["height"]=$height;
    $_SESSION["width"]=$width;
    $_SESSION["starttime"]=time();
    $_POST["check"]=0;
}
else//不是新遊戲
{
  $new=0;
  $name=$_SESSION["name"];
  $width=$_SESSION["width"];
  $height=$_SESSION["height"];
}
?>
<link rel='stylesheet' href='css/style.css'>
<script src='js/jquery.js'></script>
<script src='js/script.js'></script>
<body onload="init()">
  <div id='gamew'>
  </div>
  <span id='score'>
  </span>
</body>
<script>
var statu=<?PHP echo $new?>;
var width=<?PHP echo $width?>,height=<?PHP echo $height?>;
function init()//判斷資料儲存狀況並執行相對函式
{
  if(statu==0)
  {
    start();
  }
  else if(statu==1)
  {
    preset();
    //reload();
  }
}
</script>
