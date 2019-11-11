//Написать функцию, которая принимает 2 числа и возвращает -1 если первое меньше, 1 - если первое больше и 0 - если числа равны


let biggerSmaller = function(a ,b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}