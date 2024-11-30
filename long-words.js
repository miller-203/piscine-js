function longWords(arr) {
    return arr.every(x => x.length > 4);
}

function oneLongWord(arr) {
    return arr.some(x => x.length > 9);
}

function noLongWords(arr) {
    return arr.every(x => x.length < 7);
}