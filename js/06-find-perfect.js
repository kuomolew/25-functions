//Написать функцию, которая принимает минимальное и максимальное значение для диапазона и выводит только совершенные числа из этого диапазона

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
    if (sum === a && a!==0) {
        return true;
    } else {
        return false;
    }
}

let findPerfect = function(min, max) {
    for (let i = min; i <= max; i++) {
        isPerfect(i) ? console.log(i): i;
    }
}

findPerfect(0,9000);