const x =require("prompt-sync");
const prompt= x ();

// create an array of words
const words=['rice','monky','java','sky','amazing','movie','play'];

//pick a random word from the words array
let word=words[Math.floor(Math.random()*words.length)];

//show how many letter in the word
let answerArray=[];
for(let i=0;i<word.length;i++)
{
    answerArray[i]="_";
}

//hold the remaining numer of letter
let remaining=word.length;
// set the number of life 
lives=5;


//************************START OF THE GAME **************************

console.log("welcome to hangman  ")


//***** start of the while loop **************************************
// while there are letter to guess 
while(remaining>0){
    //show the progress
    console.log(answerArray.join(" "))

    //get guess from player 
    let guess=prompt("please guess the Letter")
    
        //if the guess more than one lette
             if(guess.length!==1){

    //alert to guess a single letter only 
    console.log("please enter asingle letter")
   
    }
// the letter not in the word 
    else if(!word.includes(guess)){
        
        
            if(lives<=5){
                console.log("     |------|")}
    
            if(lives<=4){
                console.log ("     o")
                if(lives<=3)
                console.log ("    \\ "+"/")    }    
                
    
                    if(lives<=2){
                        console.log("     |")  
                        if(lives<=1){
                            console.log("    /" +" \\" )
                             console.log("YOU ARE LOSER")//print the loser 
      
                        break;}}
                        lives--
                        //print how many life is left 
                       console.log("you have "+lives +" life left") 
        
                        
    } else if(answerArray.includes(guess)){
        //alert to guess a single letter only 
        console.log("Alredy chosen")
    
    
    }
    
    else{
        //update the game state
        for(let j=0;j<word.length;j++){
            //if the letter in the word 
            if(word[j]===guess){
                answerArray[j]=guess;
                remaining--
            
            if (remaining==0)
            console.log("WOW YOU ARE THE WINNER ") //print the winner 
            }
        }
    }
///*****************************ENF OF GAME LOOP******************
}
console.log(answerArray.join(" "))
// Let player know the hidden word 
console.log(" the answer is "+word);
            
