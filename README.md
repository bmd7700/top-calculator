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

Calculator can now do math! Hooray! 
Now to debug the following:
    1. Display not working correctly. The display should show each iteration of the integer, and when a second operator is detected, it should do the math and show the result.
    2. Equals sign logic. If the equals sign is pressed, the answer should display
        >> if the next input is a number, the memory should be cleared and new math begins.
        >> if the next input is an operator, the answer should be used as the first operand, etc. 
    3. Decimals. Currently, decimals do not work. Decimals should be accepted and rounded. 
    4. Add a backspace button.