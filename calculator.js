const buttons = document.getElementsByClassName('button');
const buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log('input:' + button.id))));
buttonArray.forEach(button =>(button.addEventListener("click", () => operate(button.id))));

const operatorArray = ['+', '-', '*', '/', '='];
const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const numbers = numArray.map((x) => parseInt(x)); // this works to map the array to a series of numbers
const flag = false;
const input1 = [];
const input2 = [];
const operation = [];
let storeNum1 = false;

function operate(input){
    const number = numArray.includes(input);
    const operator = operatorArray.includes(input);
    
    if(operator){
        length = (operation.length > 0);
        console.log('length variable: ' + length);
        if(length){
            let opp = operation.toString();
            console.log('opp: ' + opp + ' ' + typeof opp);
            doMath(input1, input2, opp);
            operation.pop();
            operation.push(input);
            console.log('operation array should be cleared and replaced: ' + operation);
        } else {
            operation.push(input);
            console.log('operation array: ' + operation);
            storeNum1 = true;
        }
        display(input);
    }

    if(number){
        if(storeNum1){
            input2.push(input);
            console.log('num2: ' + input2);
        } else {
            input1.push(input);
            console.log('num1: ' + input1);
        }
        display(input);
    }
}

function doMath(firstNum, secondNum, operator){
    let num1 = makeNumbers(firstNum);
    let num2 = makeNumbers(secondNum);
    let result;
    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;  
    }
    console.log('result: ' + result);
    display(result);
    return result;
}

function makeNumbers(arr){
    console.log('receiving array: ' + arr);
    let newArr = arr.join('');
    console.log('new: ' + newArr + '' + typeof newArr);
    return parseInt(newArr);
}

function display(someNum){
    let content = '';
    const display = document.getElementById('display');
    console.log('someNum type: ' + typeof someNum);
    content = someNum.toString();
    display.innerText = content;
    }
