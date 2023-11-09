/*
The ternary operator, also known as the conditional operator, is a concise way to write a conditional (if-else) statement in a single line. It takes three operands and has the following syntax:

Code: 
    condition ? expressionIfTrue : expressionIfFalse;

condition: An expression that is evaluated to either true or false.
expressionIfTrue: The value or expression to be returned if the condition is true.
expressionIfFalse: The value or expression to be returned if the condition is false.
*/

let num = -1
let result = (num%2===0) ? 'Even' : 'Odd'

console.log(result);