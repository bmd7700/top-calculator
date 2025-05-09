# top-calculator
Calculator project from TOP:
https://www.theodinproject.com/lessons/foundations-calculator

Calculator should:
    > Take input from the user in the form of two numbers and one operator
    > Complete and display the calculation on the calculator display
    > Have a working 'clear' function that purges all variables
    > Calculator should only evaluate a single pair of numbers. 
        >> If further operators are added, the calculator should complete the operation before moving to the next.
        >> e.g. user enters "12 + 7 - 5" the calculator should compute 12 + 7, result it, and use the result for the next operation.
        >> Round decimal answers.
        >> When results are displayed, pressing a new digit should clear the result and start a new calculation. 
    > Add a backspace button.
    > Ensure only one decimal point can be entered at a time. 

    >>Objective for next session: fix display issues.
    1: bug in display, something is entering as NaN or Undefined. Where is it coming from & why? --> Second operation stacking on first operation. The result of the first operation is storing as NaN or undefined somehow?
    --> The problem is probably in the concatenation. The input function takes numbers and concatenates them, which would implicitly convert them to strings? 