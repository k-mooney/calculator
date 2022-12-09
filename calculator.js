
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, operand1, operand2) {
    console.log("operate:  " + operator + " x=" + operand1 + " y=" + operand2);
    let x = Number(operand1);
    let y = Number(operand2);
    switch (operator) {
        case '+':
            return add(x, y);
            break;
        case '-':
            return subtract(x, y);
            break;
        case '*':
            return multiply(x, y);
            break;
        case '/':
            return divide(x, y);
            break;
        default:
            console.log("Error '" + operator + "' is not a valid operator");
    }
}

function clearDisplay() {
    displayValue = '';
    display.innerHTML = '';
}

let displayValue = '';
let operand1 = '';
let operand2 = '';
let operator = '';

let display = document.getElementById('display');

// Pressing numbers
const numbuttons = document.querySelectorAll('.numbtn');
numbuttons.forEach(numbtn => {
    numbtn.addEventListener('click', function handleNumClick(e) {
        console.log("Clicked: " + e.target.innerHTML);
        if (operator == '') {
            operand1 += e.target.innerHTML;
            displayValue = operand1;
        } else {
            operand2 += e.target.innerHTML;
            displayValue = operand2;
        }
        display.innerHTML = displayValue;
        console.log("displayValue=" + displayValue + " operand1=" + operand1 + " operand2=" +operand2);
    });
});

// Pressing Clear
let clearButton = document.getElementById('clearbtn');
clearButton.addEventListener('click', function clear(e) {
    console.log("Clicked Clear");
    clearDisplay();
    operand1 = '';
    operand2 = '';
    operator = '';
});

// Operators
const operbuttons = document.querySelectorAll('.operbtn');
operbuttons.forEach(operbtn => {
    operbtn.addEventListener('click', function handleOperation(e) {
        console.log("Operator: " + e.target.innerHTML);
        if (e.target.innerHTML === '=' || (operator !== '' && operand1 !=='' && operand2 !== '')) {
            displayValue = operate(operator, operand1, operand2);
            display.innerHTML = displayValue;
            operand1 = displayValue;
            operand2 = '';
            if (e.target.innerHTML === '=') {
                operator = '';
            } else {
                operator = e.target.innerHTML;
            }
        } else {
            operator = e.target.innerHTML;
        }
        console.log("after handleOperation operator=" + operator + " operand1=" + operand1 + " operand2=" +operand2);
    });
});
