function countLeapYears(date) {
    const start = new Date (date).getFullYear();
    let count = 0;
    for (let year = 1; year < start; year++) {
        if (isLeapYear(year)) {
            count++;
        }
    }
    return count;
}
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;

    }
}
// console.log(countLeapYears(new Date('0001-12-01')))
