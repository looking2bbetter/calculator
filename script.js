function add () {

}

function subtract () {

}

function multiply () {

}

function divide () {

}

function digitDisplay () {
    // addEventListener forEach digit button that displays the display value in a variable.

    let digits = document.querySelector('.digit');
    let display = document.querySelector('.display');

    console.log("I'm above the forEach function");

    // digits.forEach(function(digit) {
    //     digit.addEventListener('click', function () {
    //         display.innerText = digits.innerText;
    //         console.log("I'm in the forEach function");
    //     })
    // })
    

    // digits.forEach(function(digit) {
    //     digit.addEventListener('click', console.log('click'))
    // });
}

const digitButtons = Array.from(document.querySelectorAll('.digits > div > .numb'));

function itWorked () {
    console.log('this pisses me off');
}

function numPressed (e) {
    document.querySelector('.display > p').textContent = e.target.textContent;
}

digitButtons.forEach(digit => digit.addEventListener('click', numPressed));

document.querySelector('.button').addEventListener('click', console.log('april'));

document.querySelectorAll('.digits').forEach(function(digit) {
    digit.addEventListener('click', console.log('yooo'))});