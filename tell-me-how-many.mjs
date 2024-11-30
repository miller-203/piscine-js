import fs from 'fs'

function main() {
    let count = 0;
    const args = process.argv;
    const filePath = args[2];
    const fileContent = fs.readdirSync(filePath, 'utf8');
    fileContent.forEach((x) => {
        if (x.endsWith('.txt')) {
            count++;
        }
    })
    return count;
}
console.log(main());