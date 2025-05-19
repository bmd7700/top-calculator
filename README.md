# top-calculator
Calculator project from TOP:
https://www.theodinproject.com/lessons/foundations-calculator

Calculator should:
    > Take input from the user in the form of two numbers and one operator [DONE!]
    > Complete and display the calculation on the calculator display [DONE!]
    > Have a working 'clear' function that purges all variables [DONE!]
    > Calculator should only evaluate a single pair of numbers. [DONE!]
        >> If further operators are added, the calculator should complete the operation before moving to the next.[DONE, but see bug below]
        >> Round decimal answers. [DONE!]
        >> When results are displayed, pressing a new digit should clear the result and start a new calculation. 
    > Add a backspace button. [DONE!]
    > Ensure only one decimal point can be entered at a time. [DONE!]

Calculator now does math correctly and displays all user interactions in the display. Decimals are now supported. Clear and Delete (backspace) functions are working as expected. 
To Do: 
    1. If second operator entered (e.g. 22 + 22 + 22) the calculator should solve the first couplet and then do the math
    2. BUG: if second number is a decimal and first is not, it will concatenate them. e.g. 66 + 9.8 = 669.8
    