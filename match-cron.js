function matchCron(str, date) {
    const s = str.split(' ')
    const hour = date.getHours();
    const  minute = date.getMinutes();
    const day  = date.getDate();
    const d = date.getDay();
    const m = date.getMonth()+1;

    let chous = s[1] === "*" || Number(s[1]) ===  hour;
    let cmin = s[0] === "*" || Number(s[0]) ===  minute;
    let cday = s[2] === "*" || Number(s[2]) === day;
    let cd = s[4] === "*" || Number(s[4]) === d;
    let cm = s[3] === "*" || Number(s[3]) === m;

    return chous && cmin && cday && cd && cm;
}
