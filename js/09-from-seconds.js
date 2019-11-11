// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки "чч:мм:сс"

let fromSeconds = function (sec) {
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
    console.log(time);
}

fromSeconds(4654);