//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах


let toSeconds = function(hour, min, sec) {
    if (hour < 0 || min < 0 || sec < 0 || min > 60 || sec > 60 ) {
        console.log(-1);
        return -1;
    }
    // if (!hour) {
    //     console.log(-2);
    //     return -2;
    // } 
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
    
    sec = sec + min*60 + hour*60*60;
    return sec;
}

console.log(toSeconds(0,1,2));