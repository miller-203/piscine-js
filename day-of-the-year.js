function dayOfTheYear(date) {
    let year = '2000';
    date.setFullYear(2000)
    let firstday = new Date(year + '-01-01').getTime();
    let dif = (date.getTime() - firstday) / 86400000;
    return dif+1;
}