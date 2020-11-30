let a, b;

function add () {
    a = getDisplay() * 1;

    clear();
}

function equal () {
    b = getDisplay() * 1;
    return displayText.textContent = a + b;
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

let addButton = document.querySelector('.add');
addButton.addEventListener('click', add);
let equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', equal);