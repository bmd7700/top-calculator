// Three variables for user input: 
let input1;
let input2;
let desiredOperation;

// Harvest input from the user: will need event listener to capture button input. 
//event listener
let buttons = document.getElementsByClassName('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log(button.id))));

//Upon clicking, the inputs should go to an array.
//We need to collect the first number, which could be any length; an operator; and a second n-length number
//Have the script monitor inputs -- 
// if it's a number, store it in a string (V1). 
// If it's an operator, convert the string to a number and store it in a variable, then collect the second number (V2)
//  Whenever the second number is collected, call the calculation function (F1(V1,V2)) and store the result in variable (V1). 
// Now loop back to listen for an operator -- listen for a second number -- add it to the first number, then store it in the first number...etc etc
/* 

*/




//Mathematical Operations: 
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}