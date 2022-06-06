const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
 }

let hangMan =[
    ` 
      +---+
      |   |
          |
          |
          |
          |
    =========`, 
   
    ` 
      +---+
      |   |
      O   |
          |
          |
          |
    =========`, 
   
    ` 
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========`, 
   
    ` 
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========`, 
   
    ` 
      +---+
      |   |
      O   |
     /|\\  |
          |
          |
    =========`, 
   
   
    ` 
      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========`];




    let word = ["Glass ", "Chair", "Range ", "Check ", "Power", "water"];
    // let trying =5;
let numTrying = 0;
let answers = [];


function play(){
    console.log('Welcome  the Game Of Hangmang  ');
    answers=Array(word.length);
    numTrying=0;
    console.log(answers.join('')+'');
    readline.prompt();
  }
  function chose(letter){
    if(letter.length>1 || letter.length<1){
        console.log("Letter is allowed");
        readline.prompt();
    }



    let think;
      for(i=0;i<word.length;i++){
          
        if(word[i].toLowerCase()===letter){
            answers[i]=word[i];
            think=true;


        }else if(answers[i]===undefined) {
            answers[i] = '_';
        } 
      }
      think ? (think=false) :numTrying++;
      if(numTrying===5){
        console.log(hangMan[numTrying]);
        console.log('Oh no! You are hanged ,try again..');
        start();
        return;
    }else{
        console.log(hangMan[numTrying]);
    }
    answers.includes("_")
    ?readline.prompt()
    :console.log('You Won')
    console.log(answers.join(' '));

    }
play()






