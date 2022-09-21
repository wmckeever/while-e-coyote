const prompt = require('prompt-sync')({sigint: true});

/*
- Make sure to get input from the user (multiple numbers)
- Create a while loop
- A variable to hold the sum
- Print out the sum at the end
- += to add to our sum
- Reprompt inside the while loop
*/



let num = Number(prompt("Please enter a number: > "));
let sum = 0;

while(num !== 0){

  sum += num;
    num = Number(prompt("> "));

}

console.log(sum);