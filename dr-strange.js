const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];
function addWeek(date) {
    const d = new Date("0001-01-01");
    const dat = (date.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);

    return days[dat % 14];
}

function timeTravel(obj) {
    const { date, hour, minute, second } = obj;
    const newDate = new Date(date);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    return newDate;
}
