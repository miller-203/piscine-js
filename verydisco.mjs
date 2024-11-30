function main() {
    const args = process.argv;
    const options = args[2];
    let res = ""
    let check;
    check = options.split(' ')

    for (let j = 0; j < check.length; j++) {
        if (check[j].length % 2 === 0) {
            res += check[j].slice(check[j].length / 2, check[j].length) + check[j].slice(0, check[j].length / 2) + " "
        } else {
            res += check[j].slice(Math.ceil(check[j].length / 2), check[j].length) + check[j].slice(0, Math.ceil(check[j].length / 2)) + " "
        }
    }
    return res.trim(' ');
}

console.log(main())