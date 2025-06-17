'use strict';

let input = prompt(`Введіть тризначне число:`);

if (input === null ||
    isNaN(input) ||
    input.trim() === '' ||
    !Number.isInteger(+input) ||
    +input <= 100 || +input >= 999) {
    alert(`Це не коректне тризначне число.`);
} else {
    const number = String(+input);
    const a = number[0];
    const b = number[1];
    const c = number[2];
    if (a === b && b === c) {
        alert(`Всі цифри однакові. Ваші числа: ${a} ${b} ${c}.`);
    } else if (a === b || a === c || b === c) {
        alert(`Є однакові цифри. Ваші числа: ${a} ${b} ${c}.`);
    } else {
        alert(`Всі цифри різні. Ваші числа: ${a} ${b} ${c}.`);
    }
}
