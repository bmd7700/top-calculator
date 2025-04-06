//step 1: make functions for add, subtract, multiply, divide
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

//step 2: calculator operations consist of number, operator, and second number. 
// Create three variables, one for each part of the operation. 
let displayNum1;
let displayNum2;
let displayOperator;

//step 3: create a new function 'operate' that takes the operator and two numbers and calls one of the above functions.
// need to debug this so operator can be entered without quotes
function operate(num1, operator, num2){
    let op = operator;
    console.log(op);
    if(op == '+'){
        return add(num1, num2);
    } else if(op == '-'){
        return subtract(num1, num2);
    } else if(op == '*'){
        return multiply(num1, num2);
    } else if(op == '/'){
        return divide(num1, num2);
    } else {return 'Operator Error'}
}
