/*
New approach: one doMaths function that ingests an operator
*/
let buttons = document.getElementsByClassName('button');
let buttonArray = Array.from(buttons);
buttonArray.forEach(button =>(button.addEventListener("click", () => console.log(button.id))));
buttonArray.forEach(button =>(button.addEventListener("click", () => operate(button.id))));

function collectInputs(){
    //should collect num1, num2, and operator
    //num1 / num2 should be an empty string. doOperation to sortt next 
    // collect input until an operator is clicked, then store num1 and store the operator as doOperation
    //The next input must either be a number or the equals sign
    /**
     *  If number: 
     *      wait until equals sign or operator (this can be a recursive function)
     *  If equals sign:
     *      change display to result of num1 (op) num2
     */
}

function doMaths(num1, num2){
    //doOperation should be assigned by the buttons
    switch(doOperation){
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    }
}