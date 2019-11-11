//Написать функцию, которая вычисляет факториал переданного ей числа


let factorial = function(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

let a = factorial(5);
console.log(a);