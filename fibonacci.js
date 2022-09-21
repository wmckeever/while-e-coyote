const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt("Please enter a number: > "));
let fsum1 = 0;
let fsum2 = 1;
let sequence = 0;

while (sequence < num1) {

  console.log(sequence);

  fsum1 = fsum2;
  fsum2 = fsum1 + fsum2;
  sequence++

}
console.log(sequence);

