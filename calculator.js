const buttons = document.getElementsByClassName('button');
const buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log('input:' + button.id))));
buttonArray.forEach(button =>(button.addEventListener("click", () => operate(button.id))));

const operatorArray = ['+', '-', '*', '/'];
const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','.'];
var input1 = [];
var input2 = [];
var operation = [];
var storeNum1 = false;

function operate(input){
    const number = numArray.includes(input);
    const operator = operatorArray.includes(input);
    const clr = (input == 'clr');
    const equals = (input == '=');
    const decimal = (input == '.');
    
    if(operator){
        length = (operation.length > 0);
        console.log('length variable: ' + length);
        if(length){
            console.log('old operator: ' + operation);
            operation.pop();
            operation.push(input);
            console.log('new operator: ' + operation)
        } else {
            operation.push(input);
            display(input);
            console.log('operation array: ' + operation);
            storeNum1 = true;
        }
    }

    if(decimal){
        if(storeNum1){
            if(input2.includes('.')){
                input = null;
            }
        } else {
            if(input1.includes('.')){
                input = null;
            }
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
    }

    if(equals){
        doMath(input1, input2, operation.toString())
    }

    if(clr){clearMemory();}
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
            if(num2 == 0){
                result = 'Cannot divide by zero!';
            } else {
                result = num1 / num2;
            }
            break;  
    }
    console.log('doMath result: ' + result);
    input1 = [];
    input1.push(result);
    console.log('doMath new input1: ' + input1);
    input2 = [];
    display(result);
    return result;
}

function makeNumbers(arr){
    console.log('makeNumbers receiving array: ' + arr);
    let newArr = arr.join('');
    console.log('makeNumbers new array: ' + newArr + '' + typeof newArr);
    if(newArr.includes('.')){
        return parseFloat(newArr).toFixed(2);
    } else {
        return parseFloat(newArr);
    }
}

function display(someNum){
    let content = '';
    const display = document.getElementById('display');
    console.log('someNum type: ' + typeof someNum + ' ' + someNum);
    //content = someNum.toString();
    display.innerText = someNum;
}

function error(msg){
    display('ERROR DETECTED: ' + msg);
    clearMemory();
}

function clearMemory(){
    input1 = [];
    input2 = [];
    operation = [];
    storeNum1 = false;
    display(' ');
    console.log('NUKING CALCULATOR. input1: ' + input1 + ' input2: ' + input2 + ' operation: ' + operation + ' storeNum1: ' + storeNum1);
}
