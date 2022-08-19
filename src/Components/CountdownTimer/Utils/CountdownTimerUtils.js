import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    /*if(timestampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '59',
            minutes: '00',
        }
    }*/
    return {
        seconds : getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes : getRemainingMinutes(nowDayjs, timestampDayjs),
    } ;
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60 * (-1);
    //return padWithZeros(seconds, 2);
    return seconds;
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60 * (-1);
    //return padWithZeros(minutes, 2);
    return minutes;
}


// function padWithZeros(number, minLength) {
//     const numberString = number.toString();
//     if(numberString.length >= minLength) return numberString;
//     return "0".repeat(minLength - numberString.length) +  numberString;
// }