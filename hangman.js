

const hangmanDraw = [
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
   /    |
        |
  =========`, 
 
  ` 
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`]

  let targetWord = '';
  let dashes = '';
  let dArray = [];
  let failCount = 0;
  
  const categories = {
    GuessWord: ['Barcelona', "Riyadh", "Jeddah","book","Dammam"] 
     
  }
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'guess => '
});

rl.on('line', (line) => {
  checkword(line);
}).on('close', () => {
  process.exit(0);
});

function GameMass() {
  console.log('Welcome to the game of hangman, I am going to give you some dashes ' +
    'and you would guess the word in question by typing one letter');

  const options = ["GuessWord"];
  const select = options[getRandom(1)];
  targetWord = categories[select][getRandom(getRandom(categories[select].length))];
  dArray = Array(targetWord.length);
  failCount = 0;

  console.log('Category is ' + select + '\n' + dArray.join('_ ') + '_');
  rl.prompt();  
}

function checkword(letter) {
  let tick;
  for (let i = 0; i < targetWord.length; i++) {
    if (targetWord[i].toLowerCase() === letter) {
      dArray[i] = targetWord[i];
      tick = true;
    } else if (dArray[i] === undefined) {
      dArray[i] = '_';
    }
  }

  tick ? tick = false : failCount++;
  
  if (failCount === 6) {
    console.log(hangmanDraw [failCount]);
    console.log('Game over, you are hanged');
    console.log('Word is ', targetWord);
    GameMass();
    return;
  } else {
    console.log(hangmanDraw [failCount]);
  }
  dArray.includes('_') ? rl.prompt() : console.log('You you won ');
  console.log(dArray.join(' '));
}

//for getting random things
function getRandom(max) {
  return Math.floor(Math.random() * (max));
}

GameMass();