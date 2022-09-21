const prompt = require('prompt-sync')({sigint: true});


let input = prompt("Please enter a string of characters: > ");
let sum = input;

while(sum.length <= 10){
  
  console.log(sum);
  //sum = sum * 2;
  sum = sum + sum;
}
console.log(sum);
