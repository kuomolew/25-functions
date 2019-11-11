//Написать функцию,которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты и возвращает результат в виде строки "чч:мм:сс"

let toSeconds = function(hour, min, sec) {
    if (hour < 0 || min < 0 || sec < 0 || min > 60 || sec > 60 ) {
        console.log(-1);
        return -1;
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
    
    sec = sec + min*60 + hour*60*60;
    return sec;
}

let fromSeconds = function (sec) {
    let time;
    if (sec < 0) {
        console.log(-1);
        return -1;
    }
    let hour = Math.floor(sec/3600);
    sec = sec % 3600;
    let min = Math.floor(sec/60);
    sec = sec % 60;
    if (hour < 10) {
        hour = `0${hour}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (sec < 10) {
        sec = `0${sec}`
    }
    time = `${hour}:${min}:${sec}`
    //console.log(time);
    return time;
}

let time = function(hour1, min1, sec1, hour2, min2, sec2) {
    let secFirst, secSecond, secDiff, time;
    secFirst = toSeconds(hour1, min1, sec1);
    secSecond = toSeconds(hour2, min2, sec2);
    secDiff = secSecond - secFirst;
    time = fromSeconds(secDiff);
    return time;
}

console.log(time(0,30,0,1,0,60));