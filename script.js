/*
    EXTERNAL JAVASCRIPT

    This file contains multiplication
    and division operations.
*/


/*
    Multiplication function
*/

function multiplyNumbers() {

    let firstNumber = Number(
        document.getElementById("number1").value
    );

    let secondNumber = Number(
        document.getElementById("number2").value
    );

    let answer = firstNumber * secondNumber;

    document.getElementById(
        "result"
    ).textContent = answer;

}


/*
    Division function
*/

function divideNumbers() {

    let firstNumber = Number(
        document.getElementById("number1").value
    );

    let secondNumber = Number(
        document.getElementById("number2").value
    );


    /*
        Check whether the second number is zero.
    */

    if (secondNumber === 0) {

        document.getElementById(
            "result"
        ).textContent = "Cannot divide by zero";

    } else {

        let answer = firstNumber / secondNumber;

        document.getElementById(
            "result"
        ).textContent = answer;

    }

}


/*
    Connect the Multiply button
    with the multiplication function.
*/

document
    .getElementById("multiplyButton")
    .addEventListener(
        "click",
        multiplyNumbers
    );


/*
    Connect the Divide button
    with the division function.
*/

document
    .getElementById("divideButton")
    .addEventListener(
        "click",
        divideNumbers
    );