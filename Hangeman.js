const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}
//shape of game
const game = [
    `
|-----
|    | 
|    O 
|   
|   
`,
`
|-----
|    | 
|    O 
|    |
|  
`,
`|-----
|    | 
|    O 
|   /|
|  
`,
`|-----
|    | 
|    O 
|   /|\
|    
`,
`|-----
|    | 
|    O 
|   /|\
|   /
`,
`|-----
|    | 
|    O 
|   /|\
|   / \
`,
];


  const languages= ['arabic','english','spanish','french','chinese'];
 const food=['rice','pasta','pizza','fries','soup'];
  const program= ['java','javascript','python','dart','ruby'];
  const typesOfWords=[languages, food, program];
const answers = [];
//pick random words
function randomWord(numberes) {
    return numberes[Math.floor(Math.random() * numberes.length)]
  }

  //for dashes in game
function randomtypesOfWords(randomly) {
for (let i = 0; i < randomly.length; i++) {
     answers[i]=' - ';  
}
console.log(answers.join(' '));
}


async function startGame(randomly) {
    let counter=0;
    while (counter<5&&answers.includes(' - ')) {
     let GusseInput = await question('Gusse the letters of word >_< : ');
 GusseInput=GusseInput.toLowerCase(); 

 let ABCs=['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
 if(ABCs.some((letter)=>letter ===GusseInput)){
     if(randomly.includes(GusseInput)){
     let i=randomly.indexOf(GusseInput)
     answers[i]=GusseInput
     console.log(answers.join(" "));

 }else{
     counter++;
     console.log(game[counter])
    console.log('wrong word try again');
    
 }
 }else{
     console.log("-_- Please we trying to bilde game for you type any words -_-");
     process.exit();
    }

 }   
counter<5?console.log('>v< we have winner here >v<'):console.log('&_& think hard if you close &_&')
}


async function play() {
    console.log("-----------WELLCOME TO THE HANGMAN GAME -----------");
    console.log(">o< YOU HAVE FIVE TIMES TO GUSSE THE WORD BE CAREFULL >o<");
    //function do the shape
    // |-----
    // |    | 
    // |    O 
    // |   /|\
    // |   / \
    //function display the shpe of letters - - - - -  "done "
console.log(game[0]);
let num= await question('CHOOSE TYPE OF GUSSES *_* : 0-LANGUAGES 1-FOOD 2-PROGRAMMING LANGUAGE');
 let   randomly=randomWord(typesOfWords[parseInt(num)]);
console.log('ran ');
randomtypesOfWords(randomly);
//need to change the shape of - to numbers of letters ..'done'
await startGame(randomly);
readline.close();
}
 play();