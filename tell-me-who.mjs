import fs from 'fs'

function main() {
    let res = [];
    let count = 1;
    let finel = "";
    let check = [];
    const args = process.argv;
    const filePath = args[2];
    const fileContent = fs.readdirSync(filePath, 'utf8');
    fileContent.forEach((x) => {
        res = x.split('.')[0].replaceAll('_', ' ').split(' ');
        finel = res[1] + " " + res[0];
        check.push(finel);
        count++;
    });
    let j = (check).sort();
    check.forEach((elem, index) => {
        console.log(`${index+1}. ${elem}`);
    })
}
main();
