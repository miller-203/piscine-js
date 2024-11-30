const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function sunnySunday(date) {
    const d = new Date("0001-01-01");
    const dat = (date.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);

    return days[dat % 6];
}
