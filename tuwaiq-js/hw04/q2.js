/*"use strict";
const ps = require("prompt-sync");
const prompt = ps();*/
/*let age= prompt(' Enter your age: ');
let weight= prompt(' Enter your weight:');
let height= prompt(' Enter your height:');
let gender= prompt(' Enter your gender:');

let BMI =weight/height^2;
console.log('BMI='+BMI);*/
let inquirer=require("inquirer");
inquirer
  .prompt([
    {
      name: "userAge",
      type: "number",
      message: "Enter your age?",
    },
    {
      name: "userWeight",
      type: "number",
      message: "Enter your weight ?",
    },
    {
        name: "userheight",
        type: "number",
        message: "Enter your height ?",
      },
      {
        name: "userGender",
        type: "input",
        message: "Enter your Gender ?",
      }
  ])
  .then((answer) => {
    let weight="userWeight";
    let height="userheight";
    let bmi=weight/height^2;
    console.log(bmi);
    if(answer.userAge>=20){

      if(bmi<16){
        console.log('Severe Thinness');
      }else if(bmi>=16||bmi<=17){
        console.log('Moderate Thinness');
      }else if(bmi>=17||bmi<=18.5){
        console.log('Mild Thinness');
      }else if(bmi>=18||bmi<=25){
        console.log('Normal');
      }else if(bmi>=25||bmi<=30){
        console.log('Overweight');
      }else if(bmi>=30||bmi<=35){
        console.log('Obese Class I');
      }else if(bmi>=35||bmi<=40){
        console.log('Obese Class II');
      }
      else if(bmi>40){
        console.log('Obese Class III');
  
      }
    }
    let precentile=bmi*100;
    if(answer.userAge>=2||answer.userAge<=20){
      if(precentile<5){
        console.log('Underweight');
      }else if(precentile>=5||precentile<= 85){
        console.log('Healthy weight');
      }else if(precentile>=85||precentile<= 95);{
        console.log('At risk of overweight');
      } if(precentile>95)
      {
        console.log('Overweight');
      }
    }
   /* console.log(answer.userAge,answer.userWeight,answer.userheight,answer.userGender);
    answer.userWeight))*/
  });



 /* .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });*/