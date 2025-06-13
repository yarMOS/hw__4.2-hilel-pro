'use strict';

let num1Input = prompt('Enter 3 numbers');

if (!num1Input?.trim() || num1Input === null){
    alert('Дозволені лише 3-х значнi числа.');
} else if (isNaN(num1Input)) {
    alert('Дозволені лише 3-х значнi числа.');
} else if (num1Input.trim() === "") {
  alert('Ти ввів тільки пробіли або нічого не ввів.');
} else {
    num1Input = +num1Input;
    if ((num1Input >= 100 && num1Input <= 999) || (num1Input <= -100 && num1Input >= -999)) {
        alert(`Ваше 3-х значне число: ${num1Input}`);
    } else {
        alert('Дозволені лише 3-х значнi числа.');
        num1Input = 'Користувач не вказав кількість.';
    }
}