const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}

const name=[ 'ahmd', 'hadi' ,'ali' ];
const animal=['cat','dog','cow'];
const brand=['nike','lacoste','puma'];
const word=[ name,animal ,brand]

function getrandomword(ar) {
   
  return ar [Math.floor(Math.random() * ar.length )]
}
let answerArray =[];
function numberchar(randomword){
   
   for (let i=0; i<= randomword.length-1;i++){
    answerArray[i]= '_';
   }
   console.log(answerArray.join(' '));
  // let remainingLetters = randomword.length;
}
const game = [
	[` 
    +---+
        |
        |
        |
     ==== `],
	[   `
      +---+
      O   |
          |
          |
       ====`],
	[` +---+
       O   |
       |   |
           |
        ====`],
    [`+---+
     O   |
   / | \ |
         |
      ====`],
    [`  +---+
        O   |
      / | \ |
        |   |
      /   \ |
      ====`],
];
function draw(){
    
        for (const row of game) {
            const line = row.join(' ');
            console.log(line);
        
        }
    }



    async function notguess(randomword){
    let errors=0;
    while(errors<5 && answerArray.includes('_')){
        let letter = await question('gusses the latters of word ');
        if(randomword.includes(letter)){
            let index= randomword.indexOf(letter)  
            answerArray[index]= letter
            console.log(answerArray.join(' '));
        
        }else {
            console.log('try agin');
            console.log(game[errors].join())
            errors++;
        }
        

    }
   if (errors<5){
       console.log("good job")
   } else{
       console.log('try again the game :)')
   }

    readline.close();	
}


 async function play() {
    let answer= await question("write the catogre 1- name ,2- anmal ,3- brand ")
    let   randomword=getrandomword(word[parseInt(answer)-1])
    numberchar(randomword);
    notguess(randomword);    
 }
play();

