const { count } = require('console');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}

let hangman = ['+-----+','|', 'O', '/', '\\', '/', '\\'];
let Animals = ['whale', 'zebra', 'sheep', 'snail'];
let Clothing = ['skirt', 'shirt', 'dress', 'pants'];
let Food = ['donut', 'salad', 'pizza', 'sushi'];
let Job = ['pilot', 'nurse', 'judge', 'coach'];

function letterRepetition(arr, l){
	return arr.includes(l);
}

async function playAgain(arrr, indx){
	let num = await question('If you want to play again with same word please enter 1 another word from same category enter 2  exit 3   ');
	if(num == 1){
	await startGame(arrr, indx);   
	}
	if(num == 2){
		indx++;
	await startGame(arrr, indx);   
	}
	if(num == 3){
		process.exit();   
		}
}

function didHeWin(arr1, arr2){
	let b = false;
    let counter =0;
	for(let i=0;i <arr1.length;i++){
		if(arr1[i] == arr2[i]){
         counter++;
		}
	}
	if (counter == 5){
		b = true;
		console.log('Congratulations you won :) ');
	}
	return b;
}

function wrongHangman(ind){
	for(let i=0;i <= ind;i++){
		console.log(hangman[i]);
	}
}

async function startGame(arr, index){
	let wrongLetter = 2;
	let wrong = 0;
	let word = ['-', '-', '-', '-', '-'];
	let rep = 1;
	let reepetition =[];


	while (true) {
		let wordLetters = Array.from(arr[index]);
		let letter = await question('choose a letter, this word contains 5 letters  ');
		letter = letter.toLowerCase();;

		if(letterRepetition(reepetition, letter)){
			console.log('You have entered this letter before, please enter another letter  ');
			continue;
		}

		
        for(let i=0;i <wordLetters.length;i++){
            if(letter == wordLetters[i]){
		        word[i] = letter;
				console.log('You are right :' + word.join(''));
				if (didHeWin(wordLetters, word)){
					await playAgain(arr, index);
					break;
				}
			}
		}
		let c=0;
		for(let j=0;j <wordLetters.length;j++){
			if(letter != wordLetters[j]){
				c++;
		   } 
		}
		if(c == 5){
			console.log('You are wrong: ' + word.join(''));
				wrongHangman(wrongLetter);
                wrong++;
			   wrongLetter++;
		}
         if(wrong == 5 ){
			 console.log("Oh no, you lose :(   ")
			 await playAgain(arr, index);
			 break;
		 }
		reepetition[rep] = letter;
		 rep = rep+1;
    }
}

async function play(a, b, c, d){
	let index = 0;
let number = await question('Please, write the number of the category you want to play? '+ '\n' +'1-Animals 2-clothing 3-Food 4-Job ');
if(number == 1){
await startGame(a, index);   
}
if(number == 2){
await startGame(b, index);   
}
if(number == 3){
await startGame(c, index);   
}
if(number == 4){
await startGame(d, index);   
}
readline.close();
}
play(Animals, Clothing, Food, Job);