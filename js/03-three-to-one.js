//Написать функцию, которая принимает 3 отдельные цифры и превращает их в одно число


let toOne = function(a, b, c) {
    let total = `${a}${b}${c}`;
    total = parseInt(total);
    return total;
}

let a = toOne(5, 4, 7);
console.log(a);