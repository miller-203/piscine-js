function adder(arr, n = 0) {
    return arr.reduce((x, y) => x + y, n);
}

function sumOrMul(arr, n = 0) {
    return arr.reduce((x, y) => y % 2 === 0 ? x * y : x + y, n);
}

function funcExec(arr, n = 0) {
    return arr.reduce((x, y) => y(x), n);
}

