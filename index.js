'use strict';

let number = prompt(`Введіть тризначне число:`);

if (number === null || number.length !== 3 || isNaN(number)) {
    alert(`Це не коректне тризначне число.`);
} else {
    let a = number[0];
    let b = number[1];
    let c = number[2];
    if (a === b && b === c) {
        alert("Всі цифри однакові. Ваші числа: ${a} ${b} ${c}.");
    } else if (a === b || a === c || b === c) {
        alert(`Є однакові цифри. Ваші числа: ${a} ${b} ${c}.`);
    } else {
        alert(`Всі цифри різні. Ваші числа: ${a} ${b} ${c}.`);
    }
}
