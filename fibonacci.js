const prompt = require('prompt-sync')({sigint: true});


let number = Number(prompt("Please enter a number: > "));

let fSum1 = 0; 
let fSum2 = 1; 
let nextNumber = 2;
let i = 1;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(fSum1);
    nextNumber = fSum1 + fSum2;
    fSum1 = fSum2;
    fSum2 = nextNumber;
}
