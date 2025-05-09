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
const num1 = 0;
const num2 = 0;

function operate(input){
    const number = numArray.includes(input);
    const operator = operatorArray.includes(input);
    
    if(operator){
        length = (operation.length > 0);
        console.log('length variable: ' + length);
        if(length){
            //doMath();
            operation.pop();
            console.log('operation array: ' + operation);
        } else {
            operation.push(input);
            storeNum1 = true;
        }
    }

    if(number){
        if(storeNum1){
            input2.push(input);
            console.log('num2: ' + input2);
        } else {
            input1.push(input);
            console.log('num1: ' + input1);
        }
    }
}


function mapToNumber(arr){
    newNum = arr.map((x) => parseInt(x));
    console.log('mapToNumbers. newNum: ' + newNum + '' + (typeof newnum));
    return newNum;
}

function display(someNum){
    const display = document.getElementById('display');
    console.log('someNum type: ' + typeof someNum);
    let content = someNum.toString();
    display.innerText = content;
    }
