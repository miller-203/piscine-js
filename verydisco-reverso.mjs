import fs from 'fs';

function main() {
    const args = process.argv;
    const filePath = args[2];
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const result = lines.map(line => line.trim()).join('\n');
    let res = ""
    let check;
    check = result.split(' ')

    for (let j = 0; j < check.length; j++) {
        if (check[j].length % 2 === 0) {
            res += check[j].slice(check[j].length / 2, check[j].length) + check[j].slice(0, check[j].length / 2) + " "
        } else {
            res += check[j].slice(Math.floor(check[j].length / 2), check[j].length) + check[j].slice(0, Math.floor(check[j].length / 2)) + " "
        }
    }
    return res.trim(' ');
}

console.log(main())