// `
// +---+
// |   |
//     |
//     |
//     |
//     |
// =========`,

// `
// +---+
// |   |
// O   |
//     |
//     |
//     |
// =========`,

// `
// +---+
// |   |
// O   |
// |   |
//     |
//     |
// =========`,

// `
// +---+
// |   |
// O   |
// /|   |
//     |
//     |
// =========`,

// `
// +---+
// |   |
// O   |
// /|\\  |
//     |
//     |
// =========`,

// `
// +---+
// |   |
// O   |
// /|\\  |
// /    |
//     |
// =========`,

// `
// +---+
// |   |
// O   |
// /|\\  |
// / \\  |
//     |
// =========`,

// Define
let targetWord = ""
let dashes = ""
let dArray = []
let failCount = 0

// define a categories and put Names in it will bring rondom name to the user
const categories = {
  Names: ["Essa", "Mohammed", "Rayan", "Hadi"],
  Cities: ["Riyadh", "Abha", "Najran", "Jeddah"],
  Colors: ["Red", "Yallow", "Blue", "Green"],
}

const hangman = [
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
  =========`,
]

const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'guess> '
})

// the line for the input
rl.on("line", line => {
  // check the word if char in it
  checkword(line)
}).on("close", () => {
  process.exit(0)
})

// This function will print the first sintance
function init() {
  console.log("Welcome to the game of hangman")

  // define array thats bring the objects from the categories 
  // we make the select randomly from the categories
  const options = ["Names", "Cities", "Colors"];
  const select = options[getRandom(3)]
  targetWord = categories[select][getRandom(getRandom(categories[select].length))]
  dArray = Array(targetWord.length)
  failCount = 1

  console.log("Category is " + select + "\n" + dArray.join("_ ") + "_")
  rl.prompt()
}

// define function you will put the litter in it
function checkword(letter) {
  //  wallet for the letters
  let tick
  //  loop check for how many letter in the word
  for (let i = 0; i < targetWord.length; i++) {
    // Convert Upper to Lower
    if (targetWord[i].toLowerCase() === letter) {
      dArray[i] = targetWord[i]
      // read the places of the letters if the letter true will print the letter 
      // else will not print any thing
      tick = true
      console.log("You allready have put this letter !! Try another letter pleassssss!")
    } else if (dArray[i] === undefined) {
      dArray[i] = "_"
    }
  }

  //  every time you lose the chance increas
  tick ? (tick = false) : failCount++

  //   if you fail 6 time you will lose
  if (failCount === 6) {
    console.log(hangman[failCount])
    console.log("Game over, you are hanged")
    console.log("Word is ", targetWord)
    init()
    return
  } else {
    console.log(hangman[failCount])
  }

  //   else will print space to play

  dArray.includes("_") ? rl.prompt() : console.log("You have won, you won! yea")

  //   Array method convert array to string
  console.log(dArray.join(" "))
}

//for getting random
function getRandom(max) {
  return Math.floor(Math.random() * max)
}

init()
