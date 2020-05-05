var score,step=1;

$(window).keydown(function(event){ //鍵盤監聽事件
  switch(event.keyCode) {
    case 38://上
      rolate();
      break;
    case 40://下
      drop_down();
      break;
    case 37://左
      toleft();
      break;
    case 39://右
      toright();
      break;
    case 32://空白
      drop_bottom();
      break;
    default:
    //alert(""+event.keyCode)
      break;
  }
});


function start()//啟動遊戲
{
  create_table();
  random_cube();
  score=0;
  loop();
}
var loop;
function loop()//下墜迴圈
{
  loop=setInterval(function()
  {
    drop_down();
  },1000)
}

function preset()
{
  create_table();
}

function create_table()//創造遊戲畫面(table格子)
{
  var out;
  out="<table id='gamet'>";
  for(i=0;i<height;i++)
  {
    out+="<tr>";
    for(j=0;j<width;j++)
    {
      var id="l"+(i+1)+"n"+(j+1);
      out+="<td class='cube empty' id='"+id+"'></td>";
    }
    out+="</tr>";
  }
  out+="</table>";
  $('#gamew').append(out);
}

function drop_bottom()
{
  for(i=0;i<99;i++)
  {
    if(drop_down())
    {
      break;
    }
  }
}

function random_cube()//隨機產生
{
  var type=Math.floor(Math.random()*7)+1;
  var half=Math.floor(width/2);//中心行(放置基準)
  var cant=false;
  for(i=height;i>0;i--)
  {
    for(j=width;j>0;j--)
    {
      var id="l"+(i)+"n"+(j);
      if($("#"+id).hasClass('float'))
      {
        cant=true;
      }
    }
  }
  if(!cant)
  {
    if(type==1)
    {
      $("#l1n"+(half-1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('lightblue');
      $("#l1n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('lightblue');
      $("#l1n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('lightblue');
      $("#l1n"+(half+2)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('lightblue');

    }
    if(type==2)
    {
      $("#l1n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('orange');
      $("#l2n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('orange');
      $("#l2n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('orange');
      $("#l2n"+(half-1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('orange');
    }
    if(type==3)
    {
      $("#l1n"+(half-1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('blue');
      $("#l2n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('blue');
      $("#l2n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('blue');
      $("#l2n"+(half-1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('blue');
    }
    if(type==4)
    {
      $("#l1n"+(half-1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('red');
      $("#l1n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('red');
      $("#l2n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('red');
      $("#l2n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('red');
    }
    if(type==5)
    {
      $("#l1n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('green');
      $("#l1n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('green');
      $("#l2n"+(half-1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('green');
      $("#l2n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('green');
    }
    if(type==6)
    {
      $("#l1n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('purple');
      $("#l2n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('purple');
      $("#l2n"+(half-1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('purple');
      $("#l2n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('purple');
    }
    if(type==7)
    {
      $("#l1n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('yellow');
      $("#l1n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('yellow');
      $("#l2n"+(half)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('yellow');
      $("#l2n"+(half+1)).removeClass('empty')
                    .addClass('float')
                    .addClass('type0')
                    .addClass('yellow');
    }
  }
}

function drop_down()//下墜
{
  var stop=0;
  for(i=height;i>0;i--)
  {
    for(j=width;j>0;j--)
    {
      var id="l"+(i)+"n"+(j);
      var nid="l"+(i+1)+"n"+(j);
      var nnid="l"+(i+2)+"n"+(j);
      if($("#"+id).hasClass('float'))
      {
        if($("#"+nnid).hasClass('full'))
        {
          stop=2;
        }
        else if(i+1>=height && !stop)
        {
          stop=1;
        }
      }
    }
  }
  for(i=height;i>0;i--)
  {
    for(j=width;j>0;j--)
    {
      var id="l"+(i)+"n"+(j);
      var nid="l"+(i+1)+"n"+(j);
      if(stop==2)
      {
        if($("#"+id).hasClass('float'))
        {
          $("#"+nid).removeClass('empty').addClass('full')
                    .addClass(switchcolor(id)).addClass("type"+gettype(id));
          $("#"+id).removeClass('float').addClass('empty').removeClass("type"+gettype(id));
        }
      }
      else if(stop==1)
      {
        if($("#"+id).hasClass('float'))
        {
          $("#"+nid).removeClass('empty').addClass('full')
                    .addClass(switchcolor(id)).addClass("type"+gettype(id));
          $("#"+id).removeClass('float').addClass('empty').removeClass("type"+gettype(id));
        }
      }
      else if(stop==0)
      {
        if($("#"+id).hasClass('float'))
        {
          $("#"+nid).removeClass('empty').addClass('float')
                    .addClass(switchcolor(id)).addClass("type"+gettype(id));
          $("#"+id).removeClass('float').addClass('empty').removeClass("type"+gettype(id));
        }
      }
    }
  }
  if(stop==2 || stop==1)
  {
    checkline();
    random_cube();
    return true;
  }
  return false;
}
function toleft()//往左移
{
  var can=true;
  for(i=height;i>0;i--)
  {
    for(j=width;j>0;j--)
    {
      var id="l"+(i)+"n"+(j);
      var lid="l"+(i)+"n"+(j-1);
      if($('#'+id).hasClass('float'))
      {
        if(j==1)
        {
          can=false;
        }
        if($('#'+lid).hasClass('full'))
        {
          can=false;
        }
      }
    }
  }
  if(can)
  {
    for(i=0;i<height;i++)
    {
      for(j=0;j<=width;j++)
      {
        var id="l"+(i)+"n"+(j);
        var lid="l"+(i)+"n"+(j-1);
        if($('#'+id).hasClass('float'))
        {
          $('#'+lid).removeClass('empty').addClass('float')
                    .addClass(switchcolor(id)).addClass("type"+gettype(id));
          $('#'+id).removeClass('float').addClass('empty').removeClass("type"+gettype(id));
        }
      }
    }
  }
}

function toright()//往右移
{
  var can=true;
  for(i=height;i>0;i--)
  {
    for(j=width;j>0;j--)
    {
      var id="l"+(i)+"n"+(j);
      var rid="l"+(i)+"n"+(j+1);
      if($('#'+id).hasClass('float'))
      {
        if(j==width)
        {
          can=false;
        }
        if($('#'+rid).hasClass('full'))
        {
          can=false;
        }
      }
    }
  }
  if(can)
  {
    for(i=height;i>0;i--)
    {
      for(j=width;j>0;j--)
      {
        var id="l"+(i)+"n"+(j);
        var rid="l"+(i)+"n"+(j+1);
        if($('#'+id).hasClass('float'))
        {
          $('#'+rid).removeClass('empty').addClass('float')
                    .addClass(switchcolor(id)).addClass("type"+gettype(id));
          $('#'+id).removeClass('float').addClass('empty').removeClass("type"+gettype(id));
        }
      }
    }
  }
}


function getcolor(id)//取得顏色
{
  if($('#'+id).hasClass('yellow'))
  {
    return 'yellow';
  }
  if($('#'+id).hasClass('purple'))
  {
    return 'purple';
  }
  if($('#'+id).hasClass('green'))
  {
    return 'green';
  }
  if($('#'+id).hasClass('red'))
  {
    return 'red';
  }
  if($('#'+id).hasClass('blue'))
  {
    return 'blue';
  }
  if($('#'+id).hasClass('lightblue'))
  {
    return 'lightblue';
  }
  if($('#'+id).hasClass('orange'))
  {
    return 'orange';
  }
}

function switchcolor(id)//顏色處理
{
  if($('#'+id).hasClass('yellow'))
  {
    $('#'+id).removeClass('yellow');
    return 'yellow';
  }
  if($('#'+id).hasClass('purple'))
  {
    $('#'+id).removeClass('purple');
    return 'purple';
  }
  if($('#'+id).hasClass('green'))
  {
    $('#'+id).removeClass('green');
    return 'green';
  }
  if($('#'+id).hasClass('red'))
  {
    $('#'+id).removeClass('red');
    return 'red';
  }
  if($('#'+id).hasClass('blue'))
  {
    $('#'+id).removeClass('blue');
    return 'blue';
  }
  if($('#'+id).hasClass('lightblue'))
  {
    $('#'+id).removeClass('lightblue');
    return 'lightblue';
  }
  if($('#'+id).hasClass('orange'))
  {
    $('#'+id).removeClass('orange');
    return 'orange';
  }
}

function checkline()//檢測是否可消行
{
  for(i=0;i<height;i++)
  {
    var all=0;
    for(j=0;j<=width;j++)
    {
      var id="l"+(i+1)+"n"+(j);
      if($("#"+id).hasClass('full'))
      {
        all++;
      }
    }
    if(all==width)
    {
      score+=(1*step);
      step++;
      document.getElementById("score").innerHTML=("Score:"+score);
      cleanline((i+1));
    }
    else
    {
      step=1;
    }
  }
}

function cleanline(h)//消除指定行
{
  for(j=0;j<=width;j++)
  {
      var hid="l"+(h)+"n"+(j);
      $("#"+hid).removeClass('full').addClass('empty');
      switchcolor(hid);
  }
  for(i=h;i>0;i--)
  {
    for(j=0;j<=width;j++)
    {
      var id="l"+(i)+"n"+(j);
      var nid="l"+(i+1)+"n"+(j);
      if($("#"+id).hasClass('full'))
      {
        $("#"+id).removeClass('full').addClass('empty');
        $("#"+nid).addClass('full').removeClass('empty')
                  .addClass(switchcolor(id));
      }
    }
  }
}

function gettype(id)//取得方塊狀態
{
  if( $('#'+id).hasClass('type3') )
  {
    return 3;
  }
  if( $('#'+id).hasClass('type2') )
  {
    return 2;
  }
  if( $('#'+id).hasClass('type1') )
  {
    return 1;
  }
  if( $('#'+id).hasClass('type0') )
  {
    return 0;
  }
}

function rolate()//旋轉方塊
{
  var count=0;
  var l=new Array(),
  n=new Array(),
  oid=new Array(),
  nid=new Array(),
  type,color;//oid=原  nid=改後
  for(i=0;i<height;i++)
  {
    for(j=0;j<width;j++)
    {
      var id="l"+(i)+"n"+(j);
      if($("#"+id).hasClass('float'))
      {
        oid[count]=id;
        l[count]=i;
        n[count]=j;
        type=gettype(id);
        color=getcolor(id);
        nid[count]=getmoveid(type,count,l[count],n[count],color);
        count++;
      }
    }
  }
  for(i=0;i<4;i++)
  {
    if( $("#"+nid[i]).hasClass('full') || !$("#"+nid[i]).hasClass('cube'))
    {
      return false;
    }
  }
  for(i=0;i<4;i++)
  {
    $("#"+oid[i]).removeClass('float')
                 .addClass('empty')
                 .removeClass(getcolor(oid[i]))
                 .removeClass('type'+type);
  }
  if( (color=='lightblue' && type==1) ||
      (color=='orange' && type==3) ||
      (color=='blue' && type==3) ||
      (color=='red' && type==1) ||
      (color=='green' && type==1) ||
      (color=='yellow' && type==0) ||
      (color=='purple' && type==3)
    )
    {
      type=0;
    }
    else
    {
      type+=1;
    }
  for(i=0;i<4;i++)
  {
    $("#"+nid[i]).removeClass('empty')
                 .addClass('float')
                 .addClass(color)
                 .addClass('type'+type);
  }
}

function getmoveid(type,number,line,no,color)//取得方塊旋轉後的位置
{
  var id="";
  if(color=='lightblue')
  {
    if(type==0)//第0型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line-3)+"n"+(no+2);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line-2)+"n"+(no+1);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no-1);
      }
    }
    if(type==1)//第1型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line+3)+"n"+(no-2);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line+2)+"n"+(no-1);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line+1)+"n"+(no);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no+1);
      }
    }
  }
  if(color=='orange')//完成
  {
    if(type==0)
    {
      if(number==0)
      {
        id="l"+(line)+"n"+(no-2);
      }
      if(number==1)
      {
        id="l"+(line-1)+"n"+(no+1);
      }
      if(number==2)
      {
        id="l"+(line-1)+"n"+(no+1);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no-2);
      }
    }
    if(type==1)
    {
      if(number==0)
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==1)
      {
        id="l"+(line)+"n"+(no-1);
      }
      if(number==2)
      {
        id="l"+(line+1)+"n"+(no-2);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no+1);
      }
    }
    if(type==2)
    {
      if(number==0)
      {
        id="l"+(line)+"n"+(no);
      }
      if(number==1)
      {
        id="l"+(line-1)+"n"+(no+1);
      }
      if(number==2)
      {
        id="l"+(line-1)+"n"+(no+1);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no);
      }
    }
    if(type==3)
    {
      if(number==0)
      {
        id="l"+(line+1)+"n"+(no+2);
      }
      if(number==1)
      {
        id="l"+(line+2)+"n"+(no-1);
      }
      if(number==2)
      {
        id="l"+(line+1)+"n"+(no);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no+1);
      }
    }
  }
  if(color=='blue')//完成
  {
    if(type==0)
    {
      if(number==0)
      {
        id="l"+(line)+"n"+(no-1);
      }
      if(number==1)
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==2)
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no-1);
      }
    }
    if(type==1)
    {
      if(number==0)
      {
        id="l"+(line-1)+"n"+(no+2);
      }
      if(number==1)
      {
        id="l"+(line)+"n"+(no+1);
      }
      if(number==2)
      {
        id="l"+(line+1)+"n"+(no-1);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no);
      }
    }
    if(type==2)
    {
      if(number==0)
      {
        id="l"+(line)+"n"+(no-1);
      }
      if(number==1)
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==2)
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no-1);
      }
    }
    if(type==3)
    {
      if(number==0)
      {
        id="l"+(line+1)+"n"+(no);
      }
      if(number==1)
      {
        id="l"+(line+2)+"n"+(no-1);
      }
      if(number==2)
      {
        id="l"+(line+1)+"n"+(no+1);
      }
      if(number==3)
      {
        id="l"+(line)+"n"+(no+2);
      }
    }
  }
  if(color=='red')//完成
  {
    if(type==0)//第0型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line-1)+"n"+(no+2);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line)+"n"+(no+1);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no-1);
      }
    }
    if(type==1)//第1型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line+1)+"n"+(no-2);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line)+"n"+(no);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line+1)+"n"+(no-1);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no+1);
      }
    }
  }
  if(color=='green')//完成
  {
    if(type==0)//第0型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line-1)+"n"+(no-1);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line)+"n"+(no-2);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line-1)+"n"+(no+1);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no);
      }
    }
    if(type==1)//第1型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line+1)+"n"+(no+1);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line)+"n"+(no+2);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line+1)+"n"+(no-1);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no);
      }
    }
  }
  if(color=='purple')//完成
  {
    if(type==0)//第0型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line-1)+"n"+(no-1);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line-1)+"n"+(no);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no-2);
      }
    }
    if(type==1)//第1型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line+1)+"n"+(no);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line)+"n"+(no+1);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line)+"n"+(no+1);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no+1);
      }
    }
    if(type==2)//第2型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line-1)+"n"+(no+1);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line)+"n"+(no-1);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line)+"n"+(no-1);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line)+"n"+(no);
      }
    }
    if(type==3)//第3型態
    {
      if(number==0)//第0方塊
      {
        id="l"+(line)+"n"+(no);
      }
      if(number==1)//第1方塊
      {
        id="l"+(line)+"n"+(no);
      }
      if(number==2)//第2方塊
      {
        id="l"+(line)+"n"+(no);
      }
      if(number==3)//第3方塊
      {
        id="l"+(line-1)+"n"+(no+1);
      }
    }
  }
  if(color=='yellow')//完成
  {
     id="l"+(line)+"n"+(no);
  }
  return id;
}
