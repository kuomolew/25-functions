//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число - это число, равное сумме всех своих собственных делителей

let isPerfect = function(a) {
    let dividers = [];
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            dividers.push(i);
        }
    }
    for (let i = 0; i < dividers.length; i++) {
        sum +=dividers[i];
    }
    if (sum === a) {
        return true;
    } else {
        return false;
    }
}

let a = isPerfect(496);
console.log(a);