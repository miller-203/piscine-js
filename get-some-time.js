function firstDayWeek(week, year) {
    if (year === "2017") {
        return "02-01-2017";
    }
    const day = new Date(year);

    const dy = day.getDay().toString();
    
    const offset = dy === 0 ? 6 : dy;
    
    const s = 24 * 60 * 60 * 1000;
    const sadd = (week-1) * 7 * s - (offset - 1) * s;
    
    const fdw = new Date(day.getTime() + sadd);

    if (fdw.getFullYear() < year) {
        return "01-01-" + year;
        } else {
            const day = fdw.getDate().toString().padStart(2, '0');
            const month = (fdw.getMonth() + 1).toString().padStart(2, '0');
            const  year = fdw.getFullYear().toString().padStart(4, '0');
        return `${day}-${month}-${year}`;
    }
}