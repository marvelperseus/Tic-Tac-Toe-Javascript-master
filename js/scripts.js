
var temp;
var sqr1 = "sqr1";
var sqr2 = "sqr2";
var sqr3 = "sqr3";
var sqr4 = "sqr4";
var sqr5 = "sqr5";
var sqr6 = "sqr6";
var sqr7 = "sqr7";
var sqr8 = "sqr8";
var sqr9 = "sqr9";
var sqrs = [sqr1,sqr2,sqr3,sqr4,sqr5,sqr6,sqr7,sqr8,sqr9];
var sqr1T = 0
var sqr2T = 0
var sqr3T = 0
var sqr4T = 0
var sqr5T = 0
var sqr6T = 0
var sqr7T = 0
var sqr8T = 0
var sqr9T = 0
var moveCount = 0
var turn = 0
var mode = 1



window.onload = function() {
  document.getElementById("sqr5").focus();
};

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.id == 'ok') {
    	document.location.reload(true);
    } else {
 		if (!(target.id == 'container' || target.id == 'tic')){
			document.getElementById(target.id).style.border = "10px red solid";
		   	document.getElementById(target.id).style.borderRadius = "40px";
		}
    }

}, false);

function checkPhoneKey(key) {
  
    if (key == 'Enter'){
    	temp = document.activeElement;
    	document.getElementById(temp.id).click();
    }
    if (key == 'ArrowRight'){
    	temp = document.activeElement;
    	for (var i=0;i<9;i++) {
    		if(sqrs[i] == temp.id){
    			document.getElementById(sqrs[i+1]).focus();
    			document.getElementById(temp.id).blur();
    		}
    	}
    }
    if (key == 'ArrowUp'){
    	temp = document.activeElement;
    	for (var i=0;i<9;i++) {
    		if(sqrs[i] == temp.id){
    			document.getElementById(sqrs[i-3]).focus();
    			document.getElementById(temp.id).blur();
    		}
    	}
    }
    if (key == 'ArrowDown'){
    	temp = document.activeElement;
    	for (var i=0;i<9;i++) {
    		if(sqrs[i] == temp.id){
    			document.getElementById(sqrs[i+3]).focus();
    			document.getElementById(temp.id).blur();
    		}
    	}
    }
    if (key == 'ArrowLeft'){
    	temp = document.activeElement;
    	for (var i=0;i<9;i++) {
    		if(sqrs[i] == temp.id){
    			document.getElementById(sqrs[i-1]).focus();
    			document.getElementById(temp.id).blur();
    		}
    	}
    }

}


function vari()
{
	sqr1 = document.tic.sqr1.value
	sqr2 = document.tic.sqr2.value
	sqr3 = document.tic.sqr3.value
	sqr4 = document.tic.sqr4.value
	sqr5 = document.tic.sqr5.value
	sqr6 = document.tic.sqr6.value
	sqr7 = document.tic.sqr7.value
	sqr8 = document.tic.sqr8.value
	sqr9 = document.tic.sqr9.value
}
function check()
{
  if(sqr1 == " X " && sqr2 == " X " && sqr3 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
   	stop();
  } 
  else if(sqr4 == " X " && sqr5 == " X " && sqr6 == " X ")
  {
	 document.getElementById('result').innerHTML  = 'You Win!';
	 stop();
  } 
  else if(sqr7 == " X " && sqr8 == " X " && sqr9 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
    stop();
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
    stop();
  }
  else if(sqr1 == " X " && sqr4 == " X " && sqr7 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
    stop();
  }
  else if(sqr2 == " X " && sqr5 == " X " && sqr8 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
    stop();
  }
  else if(sqr3 == " X " && sqr6 == " X " && sqr9 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
    stop();
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
    stop();
  }
  else if(sqr3 == " X " && sqr5 == " X " && sqr7 == " X ")
  {
    document.getElementById('result').innerHTML  = 'You Win!';
    stop();
  }
  else
  {
  	setTimeout(winCheck,1000);
    check2();
    drawCheck();  
  } 
}

function check2()
{
  vari()
  drawCheck()
  if(sqr1 == " O " && sqr2 == " O " && sqr3 == " O ")
  {
     document.getElementById('result').innerHTML = 'You Lose!';
     stop();
  } 
  else if(sqr4 == " O " && sqr5 == " O " && sqr6 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  } 
  else if(sqr7 == " O " && sqr8 == " O " && sqr9 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  }
  else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  }
  else if(sqr1 == " O " && sqr4 == " O " && sqr7 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  }
  else if(sqr2 == " O " && sqr5 == " O " && sqr8 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  }
  else if(sqr3 == " O " && sqr6 == " O " && sqr9 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  }
  else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  }
  else if(sqr3 == " O " && sqr5 == " O " && sqr7 == " O ")
  {
    document.getElementById('result').innerHTML  = 'You Lose!';
    stop();
  }
}

function drawCheck()
{
  vari()
  moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T 
  if(moveCount == 9)
  {
    stop();
    document.getElementById('result').innerHTML  = 'Draw!';
  }
}

function winCheck()
{
  check2()
  if(sqr1 == " O " && sqr2 == " O " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O ";
    document.tic.sqr3.style.border = "10px red solid";
   	document.tic.sqr3.style.borderRadius = "40px";
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr2 == " O " && sqr3 == " O " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O ";
    document.tic.sqr1.style.border = "10px red solid";
   	document.tic.sqr1.style.borderRadius = "40px";
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr4 == " O " && sqr5 == " O " && sqr6T == 0 && turn == 1)
  {
    document.tic.sqr6.value = " O ";
    document.tic.sqr6.style.border = "10px red solid";
   	document.tic.sqr6.style.borderRadius = "40px";
    sqr6T = 1;
    turn = 0;
  }
  else if(sqr5 == " O " && sqr6 == " O " && sqr4T == 0 && turn == 1)
  {
    document.tic.sqr4.value = " O ";
    document.tic.sqr4.style.border = "10px red solid";
   	document.tic.sqr4.style.borderRadius = "40px";
    sqr4T = 1;
    turn = 0;
  }
  else if(sqr7 == " O " && sqr8 == " O " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr8 == " O " && sqr9 == " O " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O ";
    document.tic.sqr7.style.border = "10px red solid";
   	document.tic.sqr7.style.borderRadius = "40px";
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr5 == " O " && sqr9 == " O " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O "
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr3 == " O " && sqr5 == " O " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O ";
    document.tic.sqr7.style.border = "10px red solid";
   	document.tic.sqr7.style.borderRadius = "40px";
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr7 == " O " && sqr5 == " O " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O ";
    document.tic.sqr3.style.border = "10px red solid";
   	document.tic.sqr3.style.borderRadius = "40px";
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr1 == " O " && sqr3 == " O " && sqr2T == 0 && turn == 1)
  {
    document.tic.sqr2.value = " O ";
    document.tic.sqr2.style.border = "10px red solid";
   	document.tic.sqr2.style.borderRadius = "40px";
    sqr2T = 1;
    turn = 0;
  }
  else if(sqr4 == " O " && sqr6 == " O " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr7 == " O " && sqr9 == " O " && sqr8T == 0 && turn == 1)
  {
    document.tic.sqr8.value = " O ";
    document.tic.sqr8.style.border = "10px red solid";
   	document.tic.sqr8.style.borderRadius = "40px";
    sqr8T = 1;
    turn = 0;
  }
  else if(sqr1 == " O " && sqr7 == " O " && sqr4T == 0 && turn == 1)
  {
    document.tic.sqr4.value = " O ";
    document.tic.sqr4.style.border = "10px red solid";
   	document.tic.sqr4.style.borderRadius = "40px";
    sqr4T = 1;
    turn = 0;
  }
  else if(sqr2 == " O " && sqr8 == " O " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " O " && sqr9 == " O " && sqr6T == 0 && turn == 1)
  {
    document.tic.sqr6.value = " O ";
    document.tic.sqr6.style.border = "10px red solid";
   	document.tic.sqr6.style.borderRadius = "40px";
    sqr6T = 1;
    turn = 0;
  }
  else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr4 == " O " && sqr7 == " O " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O ";
    document.tic.sqr1.style.border = "10px red solid";
   	document.tic.sqr1.style.borderRadius = "40px";
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr5 == " O " && sqr8 == " O " && sqr2T == 0 && turn == 1)
  {
    document.tic.sqr2.value = " O ";
    document.tic.sqr2.style.border = "10px red solid";
   	document.tic.sqr2.style.borderRadius = "40px";
    sqr2T = 1;
    turn = 0;
  }
  else if(sqr6 == " O " && sqr9 == " O " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O ";
    document.tic.sqr3.style.border = "10px red solid";
   	document.tic.sqr3.style.borderRadius = "40px";
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr1 == " O " && sqr4 == " O " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O ";
    document.tic.sqr7.style.border = "10px red solid";
   	document.tic.sqr7.style.borderRadius = "40px";
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr2 == " O " && sqr5 == " O " && sqr8T == 0 && turn == 1)
  {
    document.tic.sqr8.value = " O ";
    document.tic.sqr8.style.border = "10px red solid";
   	document.tic.sqr8.style.borderRadius = "40px";
    sqr8T = 1;
    turn = 0;
  }
  else if(sqr3 == " O " && sqr6 == " O " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr1 == " O " && sqr9 == " O " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " O " && sqr7 == " O " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else
  {
    computer()
  }
  check2()
}
function computer()
{
  check2()
  if(sqr1 == " X " && sqr2 == " X " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O ";
    document.tic.sqr3.style.border = "10px red solid";
   	document.tic.sqr3.style.borderRadius = "40px";
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr2 == " X " && sqr3 == " X " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O ";
    document.tic.sqr1.style.border = "10px red solid";
   	document.tic.sqr1.style.borderRadius = "40px";
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr4 == " X " && sqr5 == " X " && sqr6T == 0 && turn == 1)
  {
    document.tic.sqr6.value = " O ";
    document.tic.sqr6.style.border = "10px red solid";
   	document.tic.sqr6.style.borderRadius = "40px";
    sqr6T = 1;
    turn = 0;
  }
  else if(sqr5 == " X " && sqr6 == " X " && sqr4T == 0 && turn == 1)
  {
    document.tic.sqr4.value = " O ";
    document.tic.sqr4.style.border = "10px red solid";
   	document.tic.sqr4.style.borderRadius = "40px";
    sqr4T = 1;
    turn = 0;
  }
  else if(sqr7 == " X " && sqr8 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr8 == " X " && sqr9 == " X " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O ";
    document.tic.sqr7.style.border = "10px red solid";
   	document.tic.sqr7.style.borderRadius = "40px";
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr5 == " X " && sqr9 == " X " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O ";
    document.tic.sqr1.style.border = "10px red solid";
   	document.tic.sqr1.style.borderRadius = "40px";
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr5 == " X " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O ";
    document.tic.sqr7.style.border = "10px red solid";
   	document.tic.sqr7.style.borderRadius = "40px";
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr7 == " X " && sqr5 == " X " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O ";
    document.tic.sqr3.style.border = "10px red solid";
   	document.tic.sqr3.style.borderRadius = "40px";
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr3 == " X " && sqr2T == 0 && turn == 1)
  {
    document.tic.sqr2.value = " O ";
    document.tic.sqr2.style.border = "10px red solid";
   	document.tic.sqr2.style.borderRadius = "40px";
    sqr2T = 1;
    turn = 0;
  }
  else if(sqr4 == " X " && sqr6 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr7 == " X " && sqr9 == " X " && sqr8T == 0 && turn == 1)
  {
    document.tic.sqr8.value = " O ";
    document.tic.sqr8.style.border = "10px red solid";
   	document.tic.sqr8.style.borderRadius = "40px";
    sqr8T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr7 == " X " && sqr4T == 0 && turn == 1)
  {
    document.tic.sqr4.value = " O ";
    document.tic.sqr4.style.border = "10px red solid";
   	document.tic.sqr4.style.borderRadius = "40px";
    sqr4T = 1;
    turn = 0;
  }
  else if(sqr2 == " X " && sqr8 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr9 == " X " && sqr6T == 0 && turn == 1)
  {
    document.tic.sqr6.value = " O ";
    document.tic.sqr6.style.border = "10px red solid";
   	document.tic.sqr6.style.borderRadius = "40px";
    sqr6T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr4 == " X " && sqr7 == " X " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O ";
    document.tic.sqr1.style.border = "10px red solid";
   	document.tic.sqr1.style.borderRadius = "40px";
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr5 == " X " && sqr8 == " X " && sqr2T == 0 && turn == 1)
  {
    document.tic.sqr2.value = " O ";
    document.tic.sqr2.style.border = "10px red solid";
   	document.tic.sqr2.style.borderRadius = "40px";
    sqr2T = 1;
    turn = 0;
  }
  else if(sqr6 == " X " && sqr9 == " X " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O ";
    document.tic.sqr3.style.border = "10px red solid";
   	document.tic.sqr3.style.borderRadius = "40px";
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr4 == " X " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O ";
    document.tic.sqr7.style.border = "10px red solid";
   	document.tic.sqr7.style.borderRadius = "40px";
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr2 == " X " && sqr5 == " X " && sqr8T == 0 && turn == 1)
  {
    document.tic.sqr8.value = " O ";
    document.tic.sqr8.style.border = "10px red solid";
   	document.tic.sqr8.style.borderRadius = "40px";
    sqr8T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr6 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr9 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr7 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    sqr5T = 1;
    turn = 0;
  }
  else
  {
    AI()
  }
  check2()
}

function AI()
{
  vari()
  if(document.tic.sqr5.value == "     " && turn == 1)
  {
    document.tic.sqr5.value = " O ";
    document.tic.sqr5.style.border = "10px red solid";
   	document.tic.sqr5.style.borderRadius = "40px";
    turn = 0
    sqr5T = 1
  }
  else if(document.tic.sqr1.value == "     " && turn == 1)
  {
    document.tic.sqr1.value = " O ";
    document.tic.sqr1.style.border = "10px red solid";
   	document.tic.sqr1.style.borderRadius = "40px";
    turn = 0
    sqr1T = 1
  }
  else if(document.tic.sqr9.value == "     " && turn == 1)
  {
    document.tic.sqr9.value = " O ";
    document.tic.sqr9.style.border = "10px red solid";
   	document.tic.sqr9.style.borderRadius = "40px";
    turn = 0
    sqr9T = 1
  }
  else if(document.tic.sqr6.value == "     " && turn == 1)
  {
    document.tic.sqr6.value = " O ";
    document.tic.sqr6.style.border = "10px red solid";
   	document.tic.sqr6.style.borderRadius = "40px";
    turn = 0
    sqr6T = 1
  }
  else if(document.tic.sqr2.value == "     " && turn == 1)
  {
    document.tic.sqr2.value = " O ";
    document.tic.sqr2.style.border = "10px red solid";
   	document.tic.sqr2.style.borderRadius = "40px";
    turn = 0
    sqr2T = 1
  }
  else if(document.tic.sqr8.value == "     " && turn == 1)
  {
    document.tic.sqr8.value = " O ";
    document.tic.sqr8.style.border = "10px red solid";
   	document.tic.sqr8.style.borderRadius = "40px";
    turn = 0
    sqr8T = 1
  }
  else if(document.tic.sqr3.value == "     " && turn == 1)
  {
    document.tic.sqr3.value = " O ";
    document.tic.sqr3.style.border = "10px red solid";
   	document.tic.sqr3.style.borderRadius = "40px";
    turn = 0
    sqr3T = 1
  }
  else if(document.tic.sqr7.value == "     " && turn == 1)
  {
    document.tic.sqr7.value = " O ";
    document.tic.sqr7.style.border = "10px red solid";
   	document.tic.sqr7.style.borderRadius = "40px";
    turn = 0
    sqr7T = 1
  }
  else if(document.tic.sqr4.value == "     " && turn == 1)
  {
    document.tic.sqr4.value = " O ";
    document.tic.sqr4.style.border = "10px red solid";
   	document.tic.sqr4.style.borderRadius = "40px";
    turn = 0
    sqr4T = 1
  }
  check2()
}

function stop()
{
	disableAllBoxes();
}
function disableAllBoxes() {

	var elements = document.getElementsByClassName("tictac");
	for (var i = 0; i < elements.length; i++) {
	  elements[i].disabled =true;
	}

}
function enableAllBoxes() {
	var elements = document.getElementsByClassName("tictac");
	for (var i = 0; i < elements.length; i++) {
	  elements[i].disabled =false;
	}

}