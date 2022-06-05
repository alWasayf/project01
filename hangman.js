//hangman graphic
//empty array to hold letters guessed by user. And checks if the user guessed

let targetWord = '';
let dashes = '';
let dArray = [];
let failCount = 0;

const categories = {
  color: ['grey', 'light grey', 'Dark green', 'lavender', 
    'orange', 'red'],
    Cities: ['New York', 'Los Angeles', 'California', 'Chicago',  
    'jeddah', 'Texas', 'riyadh', 'india',  'Arizona' ],}


const hangmanPhoto = [
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
   /|\\ |
        |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\ |
   /    |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\ |
   / \\ |
        |
  =========`]



  const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'guess> '

});
// 1-rl.on() method takes the first argument as line event
rl.on('line', (line) => {
  checkword(line);    //listener method called on that will take two parameters. The first parameter will the event and the second parameter will be a callback function that will return the output to the console
}).on('close', () => {
  process.exit(0);
});
//3
function init() {
  console.log('Welcome to the game of hangman, I am going to give you some empty dashes ' +
    'and you would guess the word in question by typing one letter or space at a time,' + 
    ' well that is before you are hanged! -:)');

  const options = ["color", "Cities"];
  const select = options[getRandom(2)];
  targetWord = categories[select][getRandom(getRandom(categories[select].length))];
  dArray = Array(targetWord.length);
  failCount = 0;

  console.log('Category is ' + select + '\n' + dArray.join('_ ') + '_');
  rl.prompt();  
}
//2
function checkword(letter) {
  let blank;
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i].toLowerCase() === letter) {
      dArray[i] = targetWord[i];
      blank = true;
    } else if (dArray[i] === undefined) { //array[index] == 'undefined' compares the value of the array index to the string "undefined".
      dArray[i] = '_';
    }
  }

  //check the blank and the letter of the words that com from user 

  blank ? blank = false : failCount++; //if false
  
  if (failCount === 6) {
    console.log(hangmanPhoto[failCount]);
    console.log('Game over, you are hanged');
    console.log('Word is ', targetWord);
    init();
    return;
  } else {
    console.log(hangmanPhoto[failCount]);
  } // if tue 
  dArray.includes('_') ? rl.prompt() : console.log('Congratlation ..... you did it !!!! you won !');//? will check condation 
  console.log(dArray.join(' '));// join the letter that insert from user -- that comming to the program as arry-- collect the letter to be one word.
}

//for getting random things
function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

init();