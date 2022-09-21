const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt("Please enter a number: > "));
let fsum = 0;

while(fsum <= num1){
  // fsum = num1
  num1 = num1 + fsum++

}


