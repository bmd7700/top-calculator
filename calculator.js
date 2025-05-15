const buttons = document.getElementsByClassName('button');
const buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log('input:' + button.id))));
buttonArray.forEach(button =>(button.addEventListener("click", () => operate(button.id))));

const operatorArray = ['+', '-', '*', '/', '='];
const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','.'];
const clear = ['clr']
const equal = ['=']
var input1 = [];
var input2 = [];
var operation = [];
var storeNum1 = false;

function operate(input){
    const number = numArray.includes(input);
    const operator = operatorArray.includes(input);
    const clr = clear.includes(input);
    
    if(operator){
        length = (operation.length > 0);
        console.log('length variable: ' + length);
        if(length){
            let opp = operation.toString();
            console.log('opp: ' + opp + ' ' + typeof opp);
            display(doMath(input1, input2, opp));
            operation.pop();
            if(!equal){operation.push(input);}
            console.log('operation array should be cleared and replaced: ' + operation);
        } else {
            operation.push(input);
            display(input);
            console.log('operation array: ' + operation);
            storeNum1 = true;
        }
    }

    if(number){
        if(storeNum1){
            input2.push(input);
            display(makeNumbers(input2));
            console.log('num2: ' + input2);
        } else {
            input1.push(input);
            display(makeNumbers(input1));
            console.log('num1: ' + input1);
        }
        //display(input);
    }

    if(clr){
    input1 = [];
    input2 = [];
    operation = [];
    storeNum1 = false;
    display(' ');
    console.log('NUKING CALCULATOR. input1: ' + input1 + ' input2: ' + input2 + ' operation: ' + operation + ' storeNum1: ' + storeNum1);
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
    input1 = [];
    input1.push(result);
    console.log('new input1: ' + input1);
    input2 = [];
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
    console.log('someNum type: ' + typeof someNum + ' ' + someNum);
    content = someNum.toString();
    display.innerText = content;
    }
