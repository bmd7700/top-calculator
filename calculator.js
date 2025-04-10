// Three variables for user input: 
let input1;
let input2;
let desiredOperation;

// Harvest input from the user: will need event listener to capture button input. 
//event listener
let buttons = document.getElementsByClassName('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log(button.id))));

// Call the Operate function with the user-inputted data. 
//step 3: create a new function 'operate' that takes the operator and two numbers and calls one of the above functions.
// need to debug this so operator can be entered without quotes
// maybe ingest the entire expression and then parse it by symbols?
// been approaching this all wrong. Take input from the buttons and use that to call the functions.
function operateTest(exp){
    let operation = exp.toString();
    console.log('Operation:' + operation + ' Type: ' + (typeof operation));

}
// function operate(num1, operator, num2){
//     let op = operator;
//     console.log(op);
//     if(op == '+'){
//         return add(num1, num2);
//     } else if(op == '-'){
//         return subtract(num1, num2);
//     } else if(op == '*'){
//         return multiply(num1, num2);
//     } else if(op == '/'){
//         return divide(num1, num2);
//     } else {return 'Operator Error'}
// }

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