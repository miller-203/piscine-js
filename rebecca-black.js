const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function isFriday(date) {
    if (date.getDay() === 5) {
        return true
    }
    return days[date.getDay()] === "Friday"
}
function isWeekend(date) {
    return days[date.getDay()] === "Saturday" || days[date.getDay()] === "Sunday"
}
function isLeapYear(date) {
    return date.getFullYear() % 4 === 0 && (date.getFullYear() % 100 !==
        0 || date.getFullYear() % 400 === 0)
}
function isLastDayOfMonth(date) {
    return date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0
    ).getDate()
}

// isFriday
// console.log(isFriday(new Date('2014-08-29')))
// console.log(isFriday(new Date('2020-07-17')))
// console.log(!isFriday(new Date('1992-08-26')))
// console.log(!isFriday(new Date('2000-08-26')))

// // isWeekend
// console.log(isWeekend(new Date('2014-09-06')))
// console.log(isWeekend(new Date('2020-05-30')))
// console.log(!isWeekend(new Date('1929-02-13')))
// console.log(!isWeekend(new Date('1990-01-30')))

// // isLeapYear
// console.log(isLeapYear(new Date('2024-02-01')))
// console.log(isLeapYear(new Date('2008-02-01')))
// console.log(isLeapYear(new Date('2216-02-01')))
// console.log(!isLeapYear(new Date('1993-02-01')))
// console.log(!isLeapYear(new Date('1999-02-01')))

// // isLastDayOfMonth
// console.log(isLastDayOfMonth(new Date('2020-02-29')))
// console.log(isLastDayOfMonth(new Date('2020-12-31')))
// console.log(isLastDayOfMonth(new Date('2019-02-28')))
// console.log(isLastDayOfMonth(new Date('1998-02-28')))
// console.log(isLastDayOfMonth(new Date('1980-02-29')))
// console.log(!isLastDayOfMonth(new Date('2020-12-30')))
// console.log(!isLastDayOfMonth(new Date('2020-02-28')))
// console.log(!isLastDayOfMonth(new Date('2019-02-29')))