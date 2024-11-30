function isValid(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return new Date(value) instanceof Date;
    }
    return value instanceof Date && !isNaN(value);
}
function isAfter(Date1, Date2) {
    return Date1 > Date2;
}
function isBefore(Date1, Date2) {
    return Date1 < Date2;
}
function isFuture(date) {
    return isValid(date) && (date > new Date());
}
function isPast(date) {
    return isValid(date) && (date < new Date());
}
