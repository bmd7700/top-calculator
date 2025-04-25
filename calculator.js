let buttons = document.getElementsByClassName('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log('input:' + button.id))));
buttonArray.forEach(button =>(button.addEventListener("click", () => operate(button.id))));

let operatorArray = ['+', '-', '*', '/'];
let numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let num1 = '';
let num2 = '';
let operator = '';
let operation = false;

function operate(input){
    if(numArray.includes(input) && operation === false){
        num1 = num1.concat(input);
        console.log('num1: ' + num1);
    } else if(numArray.includes(input) && operation === true){
        num2 = num2.concat(input);
        console.log('num2: ' + num2);
    } else if(operatorArray.includes(input) && operation === false){
        operator = input;
        operation = true;
        console.log('operator:' + operator + ' operation: ' + operation);
    } else if((input === '=') || (operatorArray.includes(input))){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        result = maths(num1, operator, num2);
        displayResult(result);
        num1 = '';
        num2 = '';
        operator = '';
        operation = false;
        console.log('Resetting. num1: ' + num1 + ' num2: ' + num2 + ' operator: ' + operator); 
    }

}

//Mathematical Operations: 
function maths(num1, operator, num2){
    (console.log('you are in maths.'));
    let result;
        switch(operator){
        case '+': 
            result = num1 + num2;
            break;
        case '-': 
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        }
        displayResult(result);
        num1 = result;
        console.log('result: ' + result + 'new num1: ' + num1);
    }



function displayResult(someNum){
    const display = document.getElementById('display');
    const displayContent = document.createTextNode(someNum);
    display.appendChild(displayContent);
}
