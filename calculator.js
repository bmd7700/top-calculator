let buttons = document.getElementsByClassName('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log(button.id))));
buttonArray.forEach(button =>(button.addEventListener("click", () => operate(button.id))));

let input1 = '';
let input2 = '';
let desiredOperation = '';
let operatorArray = ['+', '-', '*', '/', '='];
let memory = false;

function operate(operand){
    if(!operatorArray.includes(operand) && memory === false){ //if input is not an operator and memory is false;
        if(desiredOperation.length === 0){ //if there is no operator, store value in input1 (v1)
            input1 = input1.concat(operand);
            displayResult(input1);
            console.log('input1: ' + input1);
        } else { //if there is an operator, store in V2 as string
            input2 = input2.concat(operand);
            displayResult(input2);
            console.log('input2: ' + input2);
        } 
    } else {
        if(desiredOperation.length === 0){
            desiredOperation = operand.toString(); //stores operator as string
            displayResult(operand);
            console.log('desiredOperation: ' + desiredOperation);
        } else {
            let num1 = parseInt(input1);
            console.log('num1: ' + num1);
            let num2 = parseInt(input2);
            console.log('num2: ' + num2);
            let result;
            switch(desiredOperation) {
                case '+':
                    result = add(num1, num2);
                    desiredOperation = '';
                    console.log(desiredOperation);
                    break;
                case '-':
                    result = subtract(num1, num2);
                    desiredOperation = '';
                    console.log(desiredOperation);
                    break;
                case '*':
                    result = multiply(num1, num2);
                    desiredOperation = '';
                    console.log(desiredOperation);
                    break;
                case '/':
                    result = divide(num1, num2);
                    desiredOperation = '';
                    console.log(desiredOperation);
                    break;
                //case '=':
                default:
                    console.log('Error: you are in the default selection in the switch.');
            }
            console.log('result: ' + result);
            input1 = result;
            input2 = '';
            memory = true;
            displayResult(result);
            // will also need a CLEAR button that clears memory (memory = false)
            //also need to display the operators in the display as it goes
        }
    }
}

function displayResult(someNum){
    const display = document.getElementById('display');
    const displayContent = document.createTextNode(someNum);
    display.appendChild(displayContent);
}

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