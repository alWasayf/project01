let word = 'home';
let newArr = [];
let lives = 0;

const hangmanPics = [
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
  =========`]
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'guessHere> '
});
rl.on('line', (line) => {
  checkLetters(line);
}).on('close', () => {
  process.exit(0);
});


//Request the letters from user
function play() {
  console.log('Please, enter the letter:');
  newArr = Array(word.length);
  lives = 0;
  rl.prompt();
}

//every correct letters will be inserted to the new array.
function checkLetters(letter) {
  let keyLetter;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter) {
      newArr[i] = word[i];
      keyLetter = true;
    } else if (newArr[i] === undefined) {
      newArr[i] = '_';
    } 
    }
 
  keyLetter ? keyLetter = false : lives++;
  if (lives === 4) {
    console.log(hangmanPics[lives]);
    console.log('Game over, you are hanged idiot!');
    console.log('Word is ', word);
    play();
    return;
  } 
  else {
    console.log(hangmanPics[lives]);
  }
  newArr.includes('_') ? rl.prompt() : console.log('You WON =)');
  console.log(newArr.join(' '));
}


play();