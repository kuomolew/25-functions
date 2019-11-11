//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате "чч:мм:сс". Если при вызове минуты и/или секунды не были переданы, то выводить их как 00

let showTime = function(hour, min, sec) {
    if (hour < 0 || min < 0 || sec < 0 || hour > 24 || min > 60 || sec > 60 ) {
        console.log(-1);
        return -1;
    }
    if (!hour) {
        console.log(-2);
        return -2;
    } 
    if (!min) {
        min = 0;
    } 
    if (!sec) {
        sec = 0;
    }
    if (!Number.isInteger(hour) || !Number.isInteger(min) || !Number.isInteger(sec)){
        console.log(-3);
        return -3;
    }
    
    if (hour < 10) {
        hour = `0${hour}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }
    console.log(`${hour}:${min}:${sec}`);
}



showTime(9,0,2);