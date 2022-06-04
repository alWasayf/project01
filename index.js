var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function question(query) {
	return new Promise((resolve) => {
		rl.question(query, resolve);
	});
}
//the counter
var counter = 0;
//random number
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function randomnumber(){
    var random = getRandomInt(0,4);
    return random;
}
//the words that you can play with 
const theWords = [[
    'apple',
    'banana',
    'orange',
    'watermelon',
    'pineapple'],
    ['cat',
    'dog',
    'elephant'
    ,'giraffe',
    'lion']
    ,['gucci'
    ,'nike'
    ,'puma'
    ,'adidas'
    ,'converse']
];
    function welcomeMSG(){
    console.log("welcome to the hangGame");
     console.log("-------------------");
    console.log("you have 5 chances to guess the word");
    console.log("-------------------");
    console.log("you can enter the catagory by typing the numbers");
    console.log("-------------------");
    console.log("0.fruits 1.animals 2.brands");
    console.log("-------------------");
    console.log("you can enter the word by typing the word");
    console.log("-------------------");
    console.log("you can enter the catagory by typing the numbers");
    console.log("-------------------");
    }

//the game play
async function play(){
welcomeMSG();
    var input1 = await question("enter the catagory\n");
    var random = randomnumber();
    let x=theWords[input1][random];
    console.log("-------hint-------");
    console.log("the wrod lentgth is "+x.length);
    console.log("-------hint-------");
          
    while(counter<5){
        var input2 = await question("enter the word\n");
        if (theWords[input1][random]==input2) {
            console.log("__________");
            console.log("you did it you win with "+counter+" chances");
            console.log("__________");
            rl.close();
            counter=5;
        }else if (theWords[input1][random]!=input2){  
            count(input2,x);
            let chances=counter+1;
            console.log("you did "+chances+" chances ");
           console.log("try again");
        }
        counter++;
        gamestatus();
    }
    rl.close();
}
//the pattren 
const TheBoard = [
    ['','' ,'' ],
    ['','',''],
    ['','','']
];

//print the board
function printboard() {
   for(var item in TheBoard){
         console.log(TheBoard[item]);

    }
}
//the game play printresult
 function gamestatus() {
    if(counter==1){
        TheBoard[0][1] = "|";
        printboard();
    }if(counter==2){
        TheBoard[1][1] = "O";
        printboard();
    }if(counter==3){
        TheBoard[1][0] = "-";
        TheBoard[1][2] = "-";
        printboard();
    }if(counter==4){
        TheBoard[2][0] = "//";
        printboard();
    }
    if(counter==5){
        TheBoard[2][2] = "\\";
        printboard();
        console.log("game over you lose ");
    }
}
play();


function count(str1, str2)
{
    var c = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i]))
        console.log("charcter "+str1[i]+" is in the the word in index in of word "+str2.indexOf(str1[i])); 
        c++;
      
    }
    console.log("you have "+c+" correct charcters");
}


    
   
