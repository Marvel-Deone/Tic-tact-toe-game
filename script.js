// var tac = 'O';
// var box = "";
// var check = false;

var tac = 'O';
var box = "";
var check = false;

// if (player1.value ==" " && player2.value ==" ") {
//         // alert("OU")
//         // console.log ('Yes')
//         replay.disabled =true;
//         nameplayer.innerHTML = "Click start to start the game";
//     }

//    FUNCTION FOR START AND END BUTTON
const start =()=> {
    // if (player1.value == " " && player2.value == " " && btn.innerHTML =="Start") {
    //     first.disabled =true;
    //     second.disabled =true;
    //     third.disabled =true;
    //     fourth.disabled =true;
    //     fifth.disabled =true;
    //     sixth.disabled =true;
    //     seventh.disabled =true;
    //     eighth.disabled =true;
    //     nineth.disabled =true;
    // }
     if (player1.value != "" && player2.value != "" && btn.innerHTML =="Start") {
        btn.innerHTML = "End";
        check =true;
        firstplayer.innerHTML =player1.value;
        secondplayer.innerHTML =player2.value;
        nameplayer.innerHTML ="Start the game" + " " + player1.value + "{O}";
        result.innerHTML = "Entertain yourself with the game GOODLUCK!!!";
        first.innerHTML = '';
        second.innerHTML = '';
        third.innerHTML = '';
        fourth.innerHTML = '';
        fifth.innerHTML = '';
        sixth.innerHTML = '';
        seventh.innerHTML = '';
        eighth.innerHTML = '';
        nineth.innerHTML = '';
    }
    else if (player1.value != "" && player2.value != "" && btn.innerHTML =="End") {
        check =false;
        box =" ";
        player1.value ="";
        player2.value ="";
        firstplayer.innerHTML ="";
        secondplayer.innerHTML ="";
        nameplayer.innerHTML ="The game has ended !!! Thanks";
        result.innerHTML ="The game has ended !!! Thanks";
        scoreone.innerHTML ="0";
        scoretwo.innerHTML ="0";
        btn.innerHTML ="Start";
        first.innerHTML = '';
        second.innerHTML = '';
        third.innerHTML = '';
        fourth.innerHTML = '';
        fifth.innerHTML = '';
        sixth.innerHTML = '';
        seventh.innerHTML = '';
        eighth.innerHTML = '';
        nineth.innerHTML = '';
    }
    else {
        nameplayer.innerHTML ="Please enter your names"
        result.innerHTML ="Please enter your names"
    }
}

//  IF STATEMENT FOR RE-PLAY BUTTON
const rePlay =()=> { 
    if (player1.value == " " & player2.value == " ") {
        replay.disabled =true;
        alert('No')
        nameplayer.innerHTML = "Click on start to start the game.";
        result.innerHTML = " "
    }
    
        first.innerHTML = '';
        second.innerHTML = '';
        third.innerHTML = '';
        fourth.innerHTML = '';
        fifth.innerHTML = '';
        sixth.innerHTML = '';
        seventh.innerHTML = '';
        eighth.innerHTML = '';
        nineth.innerHTML = '';
        nameplayer.innerHTML ="CONTINUE PLAYERS !!!";
        result.innerHTML =" Another oppurtunity {BEST OF LUCKS !!!}";
        first.disabled =false;
        second.disabled =false;
        third.disabled =false;
        fourth.disabled =false;
        fifth.disabled =false;
        sixth.disabled =false;
        seventh.disabled =false;
        eighth.disabled =false;
        nineth.disabled =false;
}
// END OF RE-PLAY BUTTON

// FOR THE {X} AND {O}
const myTac = e=> {
var no =0;
var target = e.target;
var parent = target.parentNode;
var index = [].indexOf.call(parent.children, target);
mine.innerText= "index:" +index;

if(e.target.innerText == "" && tac === 'X') {
e.target.innerText ="X";
tac ='0';
nameplayer.innerHTML = player1.value +  " " + " {O}" + " " + "your turn";
result.innerHTML = "Entertain yourself with the game GOODLUCK!!!";
// alert("X");
}
else if(e.target.innerText == "" || tac === 'O') {
e.target.innerText = "O";
tac ='X';
nameplayer.innerHTML = player2.value +  " " + " {X}" + " " + "your turn";
result.innerHTML = "Entertain yourself with the game GOODLUCK!!!";
// alert("O");
}
// END OF {X} AND {O}
// IF STATEMENT FOR WINNER WITH LETTER {X}

var a = first.innerHTML;
var b = second.innerHTML;
var c = third.innerHTML;
var d = fourth.innerHTML;
var g = fifth.innerHTML;
var h = sixth.innerHTML;
var i = seventh.innerHTML;
var j = eighth.innerHTML;
var k = nineth.innerHTML;
// var a = first.innerHTML;
if ((a=="X" && b=="X" && c=="X") || (d=="X" && g=="X" && h=="X") || (i=="X" && j=="X" && k=="X") || 
(a=="X" && d=="X" && i=="X") || (b=="X" && g=="X" && j=="X") || (c=="X" && h=="X" && k=="X") || (c=="X" && g=="X" && i=="X") || (a=="X" && g=="X" && k=="X"))  {
nameplayer.innerHTML = player2.value + " " + "has won the game. click re-play or end.";
result.innerHTML = player1.value +"{O} It will be your turn after re-play";
++scoretwo.innerHTML;
}
//  END OF IF STATEMENT FOR WINNING LETTER {X}

// IF STATEMENT FOR WINNING LETTER {O}
if ((a=="O" && b=="O" && c=="O") || (d=="O" && g=="O" && h=="O") || (i=="O" && j=="O" && k=="O") || 
(a=="O" && d=="O" && i=="O") || (b=="O" && g=="O" && j=="O") || (c=="O" && h=="O" && k=="O") || (c=="O" && g=="O" && i=="O") || (a=="O" && g=="O" && k=="O"))  {
nameplayer.innerHTML = player1.value + " " + "has won the game. click re-play or end.";
result.innerHTML = player2.value +"{X} It will be your turn after re-play";
++scoreone.innerHTML;

}
// // END OF IF STATEMENT FOR WINNIG LETTER {O}

// // IF STATEMENT TO DISABLE THE REST AFTER WINNING
if ((a=="X" && b=="X" && c=="X") || (d=="X" && g=="X" && h=="X") || (i=="X" && j=="X" && k=="X") || 
(a=="X" && d=="X" && i=="X") || (b=="X" && g=="X" && j=="X") || (c=="X" && h=="X" && k=="X") || (c=="X" && g=="X" && i=="X") || (a=="X" && g=="X" && k=="X"))  {
first.disabled =true;
second.disabled =true;
third.disabled =true;
fourth.disabled =true;
fifth.disabled =true;
sixth.disabled =true;
seventh.disabled =true;
eighth.disabled =true;
nineth.disabled =true;
// result.innerHTML = "There is a winner already"
}

if ((a=="O" && b=="O" && c=="O") || (d=="O" && g=="O" && h=="O") || (i=="O" && j=="O" && k=="O") || 
(a=="O" && d=="O" && i=="O") || (b=="O" && g=="O" && j=="O") || (c=="O" && h=="O" && k=="O") || (c=="O" && g=="O" && i=="O") || (a=="O" && g=="O" && k=="O"))  {
first.disabled =true;
second.disabled =true;
third.disabled =true;
fourth.disabled =true;
fifth.disabled =true;
sixth.disabled =true;
seventh.disabled =true;
eighth.disabled =true;
nineth.disabled =true;
}
// END OF IF STATEMENT TO DISABLE THE REST AFTER WINNING

// IF STATEMENT FOR START AND END BUTTON
if (player.value == "" && player2.value == " ") {

first.innerHTML = '';
second.innerHTML = '';
third.innerHTML = '';
fourth.innerHTML = '';
fifth.innerHTML = '';
sixth.innerHTML = '';
seventh.innerHTML = '';
eighth.innerHTML = '';
nineth.innerHTML = '';

}
//  if (player1.value =="" || player2.value =="") {
//    first.innerHTML = '';
//    second.innerHTML = '';
//    third.innerHTML = '';
//    fourth.innerHTML = '';
//    fifth.innerHTML = '';
//    sixth.innerHTML = '';
//    seventh.innerHTML = '';
//    eighth.innerHTML = '';
//    nineth.innerHTML = '';
// }
// THE END OF END AND START BUTTON

// FUNCTION FOR THE WINNIG MESSAGE
if (nameplayer.innerHTML==player1.value + "has won the game. click replay to restart or end to end the game" || nameplayer.innerHTML==player2.value  + "has won the game. click replay to restart or end to end the game") {
nameplayer.innerHTML == "We have a winner already click on replay or End."
}
if (event.target.innerHTML != "") {
return;
}
if (nameplayer.innerHTML == "We have a winner already click on replay or End.") {
return;
}
else if (check ==true && box == " ") {
event.target.innerHTML ="X";
box = 1;
nameplayer.innerHTML =player2.value + "{O}" + "your turn";
}
else if (check ==true && box == 1) {
event.target.innerHTML ="O";
box = " ";
nameplayer.innerHTML =player1.value + "{X}" + "your turn";
}
else {
nameplayer.innerHTML = "Click on start to start the game.";
result.innerHTML = " "
}
// FUNCTION FOR THE DRAWING CONDITIONS
if ((a=="X" && b=="X" && c=="X") || (d=="X" && g=="X" && h=="X") || (i=="X" && j=="X" && k=="X") || 
(a=="X" && d=="X" && i=="X") || (b=="X" && g=="X" && j=="X") || (c=="X" && h=="X" && k=="X") || (c=="X" && g=="X" && i=="X") || (a=="X" && g=="X" && k=="X") &&
(a=="O" && b=="O" && c=="O") || (d=="O" && g=="O" && h=="O") || (i=="O" && j=="O" && k=="O") || 
(a=="O" && d=="O" && i=="O") || (b=="O" && g=="O" && j=="O") || (c=="O" && h=="O" && k=="O") || (c=="O" && g=="O" && i=="O") || (a=="O" && g=="O" && k=="O")
) {
// alert("Oops")
nameplayer.innerHTML = "Oopps!! Draw game. click on Re-play to play again or End to end the game "
result.innerHTML = "Oopps No Winner"
}

}