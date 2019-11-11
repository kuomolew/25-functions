//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата


let square = function(a, b) {
    let square;
    b ? square = a*b : square =  a*a;
    return square;
}

let a = square(3, 5);
console.log(a);