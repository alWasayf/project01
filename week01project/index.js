const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt:'Guess A Letter >'
    
});

rl.on('line', (line) => {checkTheLetter(line);}).on('close', () => {
  process.exit(0);
});


const correctWord ='Wolf';
let arrOfLetters = [];
let wrongAttempts=0;

const hangmanGame = [
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


    
  function getStart(){
    console.log('Welcome to the Game Of Hangman, Guess a word by typing one letter : ');
    arrOfLetters=Array(correctWord.length);
    wrongAttempts=0;
    console.log(arrOfLetters.join('_')+'_');
    rl.prompt();
  }
 
  function checkTheLetter(letter){
      if(letter.length>1 || letter.length<1){
          console.log("Only One Letter is allowed");
          rl.prompt();
      }
      let guess;
      for(i=0;i<correctWord.length;i++){
          
        if(correctWord[i].toLowerCase()===letter){
            arrOfLetters[i]=correctWord[i];
           guess=true;


        }else if(arrOfLetters[i]===undefined) {
            arrOfLetters[i] = '_';
        } 
      }
      guess ? (guess=false) :wrongAttempts++;
      if(wrongAttempts===4){
        console.log(hangmanGame[wrongAttempts]);
        console.log('Oh no! You are hanged ,try again..');
        getStart();
        return;
    }else{
        console.log(hangmanGame[wrongAttempts]);
    }
    arrOfLetters.includes("_")
    ?rl.prompt()
    :console.log('You Won , yeaas!')
    console.log(arrOfLetters.join(' '));

    }
    
  getStart();



