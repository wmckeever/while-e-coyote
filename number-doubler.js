const prompt = require('prompt-sync')({sigint: true});

/*
To do:
- Prompt the user for a number
- Double the number until it is equal to or greater than 100
- To get a double of a number, we add the same number to itself. 
*/

let num = Number(prompt("Please enter a number: > "));
let sum = num;

while(sum < 100){
  
  console.log(sum);
  sum = sum * 2;
}
console.log(sum);
