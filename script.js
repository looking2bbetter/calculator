let a, b, operator;

function add () {
    a = getDisplay() * 1;

    clear();
}

function equal () {
    b = getDisplay() * 1;

    if (operator.textContent == '+') {
        displayText.textContent = a + b;
    } else if (operator.textContent == '-') {
       displayText.textContent = a - b;
    } else if (operator.textContent == '/') {
        displayText.textContent = a / b;
    } else {
        displayText.textContent = a * b;
    }
}

function clear () {
    displayText.textContent = '';
}

document.querySelector('.clear').addEventListener('click', clear);

const digitButtons = Array.from(document.querySelectorAll('.digits > div > .number'));
let displayText = document.querySelector('.display > p');
function numPressed (e) {
    displayText.textContent += e.target.textContent;
}

digitButtons.forEach(digit => digit.addEventListener('click', numPressed));

function getDisplay () {
    return displayText.textContent;    
}

let operatorButtons = Array.from(document.querySelectorAll('.operator'));
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', function (e) {
    a = getDisplay() * 1;
    clear();

    operator = e.target;
}));

let equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', equal);

