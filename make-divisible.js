const prompt = require('prompt-sync')({sigint: true});


let num1 = Number(prompt("Please enter a number for x: > "));
let num2 = Number(prompt("Please enter a second numberfor y: > "));


while(num1 % num2 !== 0){

 num1++
 console.log(num1)

}

console.log(num1 +  " is divisible by "  + num2)
