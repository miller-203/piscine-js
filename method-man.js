function words(x) {
    const myWords = x.split(' ');
    return myWords;
}
function sentence(x) {
    const myWords = x.join(' ');
    return myWords;
}
function yell(x) {
    const myWords = x.toUpperCase();
    return myWords;
}
function whisper(x) {
    const myWords = x.toLowerCase();
    return "*" + myWords + "*";
}
function capitalize(x) {
    const myWords = x.toLowerCase();
    const firstLetter = myWords[0].toUpperCase();
    return firstLetter + myWords.slice(1);
}