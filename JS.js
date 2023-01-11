// -----------------------Button disable function----------------------------------
function disableall (){
  document.getElementById("b1").disabled=true;
  document.getElementById("b2").disabled=true;
  document.getElementById("b3").disabled=true;
  document.getElementById("b4").disabled=true;
  document.getElementById("b5").disabled=true;
  document.getElementById("b6").disabled=true;
  document.getElementById("b7").disabled=true;
  document.getElementById("b8").disabled=true;
  document.getElementById("b9").disabled=true;
}
function xwon(){
  document.getElementById('print')
     .innerHTML = "Player X is Winner";
}
function owon(){
  document.getElementById('print')
     .innerHTML = "Player 0 is Winner";
}
function tiee(){
  document.getElementById('print')
     .innerHTML = "Match is TIE";
}
// -------------------------------------------------------------------------------------
function bdisable()
{
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
     b1 =document.getElementById('b1').value;
     b2 =document.getElementById('b2').value;
     b3 =document.getElementById('b3').value;
     b4 =document.getElementById('b4').value;
     b5 =document.getElementById('b5').value;
     b6 =document.getElementById('b6').value;
     b7 =document.getElementById('b7').value;
     b8 =document.getElementById('b8').value;
     b9 =document.getElementById('b9').value;
     // ------------------------PLAYER X WINNING POSSIBILITIES START ------------------------------------------------     
     if ((b1=='X') && (b2=='X') && (b3=='X'))
     {     
        xwon()
        disableall();
        window.alert('Player X is Winner');
     }
     else if ((b4=='X') && (b5=='X') && (b6=='X'))
     {
      xwon()
      disableall();
      window.alert('Player X is Winner');

    }
     else if((b7=='X') && (b8=='X') && (b9=='X'))
     {
        xwon()
        disableall();
        window.alert('Player X is Winner');
        }
         
     else if((b1=='X') && (b4=='X') && (b7=='X'))
     {
        xwon()
        disableall();
        window.alert('Player X is Winner');
     }
     else if((b1=='X') && (b5=='X') && (b9=='X'))
     {
        xwon()
        disableall();
        window.alert('Player X is Winner');
     }
     else if((b3=='X') && (b5=='X') && (b7=='X'))
     {
        xwon()     
        disableall();
        window.alert('Player X is Winner');
     }
     else if((b3=='X') && (b6=='X') && (b9=='X'))
     {
        xwon()
        disableall();
        window.alert('Player X is Winner');
     }
     else if((b2=='X') && (b5=='X') && (b8=='X'))
     {
        xwon()
        disableall();
        window.alert('Player X is Winner');
     }
// ------------------------PLAYER X WINNING POSSIBILITIES END ------------------------------------------------     
// ------------------------PLAYER 0 WINNING POSSIBILITIES START ------------------------------------------------     

else if ((b1=='0') && (b2=='0') && (b3=='0'))
{    
     owon()
     disableall();
    window.alert('Player 0 is Winner');
}

else if ((b4=='0') && (b5=='0') && (b6=='0'))
{
    owon()
    disableall();
    window.alert('Player 0 is Winner');
}
else if((b7=='0') && (b8=='0') && (b9=='0'))
{ 
    owon()   
    disableall();
    window.alert('Player 0 is Winner');
}
else if((b1=='0') && (b4=='0') && (b7=='0'))
{
    owon() 
    disableall();
    window.alert('Player 0 is Winner');
}
else if((b1=='0') && (b5=='0') && (b9=='0'))
{
    owon()
    disableall();
    window.alert('Player 0 is Winner');
}
else if((b3=='0') && (b5=='0') && (b7=='0'))
{
    owon()  
    disableall();
    window.alert('Player 0 is Winner');
}
else if((b3=='0') && (b6=='0') && (b9=='0'))
{
    owon()  
    disableall();
    window.alert('Player 0 is Winner');
}
else if((b2=='0') && (b5=='0') && (b8=='0'))
{
    owon()  
    disableall();
    window.alert('Player 0 is Winner');
}
// ------------------------PLAYER 0 WINNING POSSIBILITIES END ------------------------------------------------     
 
// -----------------------------Match tie--------------------------------------------
else if ((b1=='0' || b1=='X')&&(b2=='0'||b2=='X')
        &&(b3=='0'||b3=='X')&&(b4=='0'||b4=='X')
        &&(b5=='0'||b5=='X')&&(b6=='0'||b6=='X')
        &&(b7=='0'||b7=='X')&&(b8=='0'||b8=='X')
        &&(b9=='0'||b9=='X'))
        {
          window.alert('Match Tie');
          tiee();
        }
     else {
            if (flag == 1) {
                document.getElementById('print')
                    .innerHTML = "Player X Turn";
            }
            else {
                document.getElementById('print')
                    .innerHTML = "Player 0 Turn";
            }
        }
     
}

function playagain(){
    location.reload();
    b1 =document.getElementById('b1').value='';
    b2 =document.getElementById('b2').value='';
    b3 =document.getElementById('b3').value='';
    b4 =document.getElementById('b4').value='';
    b5 =document.getElementById('b5').value='';
    b6 =document.getElementById('b6').value='';
    b7 =document.getElementById('b7').value='';
    b8 =document.getElementById('b8').value='';
    b9 =document.getElementById('b9').value='';

}

function xval(){
  document.getElementById('b1').value="X";
    document.getElementById('b1').disabled=true;
    flag=0;
}

function oval(){
  document.getElementById('b1').value="0";
    document.getElementById('b1').disabled=true;
    flag=1;
}
flag=1;
function binput1(){
if(flag==1)
{
  xval()
}   
else {
    oval()
}
}

function binput2(){
  if(flag==1)
  {
    document.getElementById('b2').value="X";
    document.getElementById('b2').disabled=true;
    flag=0;
  }   
   else {
    document.getElementById('b2').value="0";
    document.getElementById('b2').disabled=true;
    flag=1;
  }
}

function binput3(){
    if(flag==1)
    {
      document.getElementById('b3').value="X";
      document.getElementById('b3').disabled=true;
      flag=0;
    }   
     else {
      document.getElementById('b3').value="0";
      document.getElementById('b3').disabled=true;
      flag=1;
    }
  }

  function binput4(){
    if(flag==1)
    {
      document.getElementById('b4').value="X";
      document.getElementById('b4').disabled=true;
      flag=0;
    }   
     else {
      document.getElementById('b4').value="0";
      document.getElementById('b4').disabled=true;
      flag=1;
    }
  }
  function binput5(){
    if(flag==1)
    {
      document.getElementById('b5').value="X";
      document.getElementById('b5').disabled=true;
      flag=0;
    }   
     else {
      document.getElementById('b5').value="0";
      document.getElementById('b5').disabled=true;
      flag=1;
    }
  }
  function binput6(){
    if(flag==1)
    {
      document.getElementById('b6').value="X";
      document.getElementById('b6').disabled=true;
      flag=0;
    }   
     else {
      document.getElementById('b6').value="0";
      document.getElementById('b6').disabled=true;
      flag=1;
    }
  }
  function binput7(){
    if(flag==1)
    {
      document.getElementById('b7').value="X";
      document.getElementById('b7').disabled=true;
      flag=0;
    }   
     else {
      document.getElementById('b7').value="0";
      document.getElementById('b7').disabled=true;
      flag=1;
    }
  }
  function binput8(){
    if(flag==1)
    {
      document.getElementById('b8').value="X";
      document.getElementById('b8').disabled=true;
      flag=0;
    }   
     else {
      document.getElementById('b8').value="0";
      document.getElementById('b8').disabled=true;
      flag=1;
    }
  }
  function binput9(){
    if(flag==1)
    {
      document.getElementById('b9').value="X";
      document.getElementById('b9').disabled=true;
      flag=0;
    }   
     else {
      document.getElementById('b9').value="0";
      document.getElementById('b9').disabled=true;
      flag=1;
    }
  }
