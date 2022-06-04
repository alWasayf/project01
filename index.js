///project 1
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}
let str = [['hat'],['bat'],['cat']];
let count=7
let m=0
let arr=[ '                                                  you lost           ',
    '                                                 / \\',
        '                                                  |',
        '                                                 /|\\',
        '                                                  o',
        '                                                  |',
        '                                              |----------',
   ]
          let newArray=[] ;
    random_word=str[Math.round(Math.random()*str.length)];
    let length_word=random_word.toString();
    //--------------------------------------------------------------------
async function play(){
    while(count>0){
        if(length_word.length>=m){
    let letter =  await question('expect letter ');
   await check_words(letter);
    m++
    }
    else{
        console.log(length_word)
        break 
    }
    printyes()
}
    readline.close();
}
play()
//----------------------------------------------------------------
async function check_words(letter){
for (let i =0; i <3; i++) {
    if(length_word.includes(letter)){
       await printyes(letter)
          //  console.log(`ok this letter in here`)
           await play()
           process.exit();
    }
    else if(!length_word.includes(letter)){
        count--
         await printwrong()
         //console.log(newArray[count])

        //console.log(`remaining attempts  ${count}`) 
        await play() 
        			process.exit();

    }
}
}
//-------------------------------------------------------------------
function printyes(letter){
    
const postion=length_word.toString().indexOf(letter)
//console.log(postion)
newArray.splice(postion,0,letter)
console.log(`this letter is in ${postion+1}   postion of the word`)
console.log(...newArray)
if(length_word.length===newArray.length){
    console.log('you won')
    process.exit();
}
}
//--------------------------------------------------------------------
async function printwrong(){
  let h=[]
 let i=6
      let j=[]
      j=j+1
                h=arr.pop(h)
                console.log(h)            
      }

