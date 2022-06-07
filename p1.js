const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}
const words=['apple','lemon','mango','onion','grape']
// Get Random Number 
let randomNumword =  Math.floor(Math.random()* words.length);
//Get Random  Name 
let randomNameWord = words[randomNumword];

let wordarr = []; 
let incorrectword;
let misses=0; // sum of wrong 
let guess=false; 

async function compareLetters(l){
   //console.log(l);
	while(true){
		for(let t=0;t<l.length;t++){
            wordarr[t]="-";   
        }
		console.log(wordarr.join(''));

		for(let i = 0; i<l.length;i++){
           let letter= await question('Please, Enter the Gusse fruits or vegetable Letter');
		   if(l.includes(letter)) {
			wordarr[l.indexOf(letter)]=letter;
				  guess=true;
				  console.log("The correc letter " + wordarr.join(''));
				  incorrectword=0;
			}else if(!(l.includes(letter))){
				wordarr[l.indexOf(letter)]=letter;
				   incorrectword++;
				   guess=false;
				   misses++; 
				   hangman(misses) 	}
		    }
            		
		if(guess){
			console.log("you win");
		}
		else{
			console.log("Incorrect word")

		}
		
		if(misses>5){
			console.log("Sorry, You lose! ");
			hangman(misses);
			break;
		}
     break; 
	}
}
function hangman(misses) {
	
	if(misses==0)  
	{
	  console.log("  +------+ \n");
	  console.log("  |      | \n");
	  console.log("         | \n");
	  console.log("         | \n");
	  console.log("         | \n");
	  console.log("         | \n");
	  console.log(" ========= \n");
	}
	else if(misses==1)
	{
	  console.log("  +------+ \n");
	  console.log("  |      | \n");
	  console.log("  O      | \n");
	  console.log("         | \n");
	  console.log("         | \n");
	  console.log("         | \n");
	  console.log(" ========= \n");
	}
	else if(misses==2)
	{
	 console.log("  +------+ \n");
	 console.log("  |      | \n");
	 console.log("  O      | \n");
	 console.log("  |      | \n");
	 console.log("         | \n");
	 console.log("         | \n");
	 console.log(" ========= \n");
	}
	
	else if(misses==3)
	{
	 console.log("   +-------+ \n");
	 console.log("   |       | \n");
	  console.log("  O       | \n");
	  console.log(" /|\      | \n");
	 console.log("           |  \n");
	  console.log("          | \n");
	  console.log(" ========= \n");
	}
	
	else if(misses==4)
	{
	 console.log("   +-------+    \n");
	 console.log("   |       |    \n");
	  console.log("  O       |    \n");
	 console.log("  /|\      |    \n");
	 console.log("  / \      |    \n");
	  console.log("          |    \n");
	  console.log(" =========     \n");
	}
}
compareLetters(randomNameWord);
