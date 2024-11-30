function pyramid(char, depth) {
    let result = '';
    let len = char.length;
    let cop = char.length;
    for (let i = 0; i <= depth - 1; i++) {
        const spaces = ' '.repeat((depth*len)-cop);
        const stars = char.repeat(2 * i + 1);
        result += spaces + stars;
        if (i < depth - 1) {
            result += "\n";
        }
        cop += len;
    }
    return result;
}
