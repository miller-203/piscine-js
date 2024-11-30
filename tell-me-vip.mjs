import fs from 'fs';
import path from 'path';

function main() {
    let check = [];
    const args = process.argv;
    const directoryPath = args[2];

    const fileNames = fs.readdirSync(directoryPath);

    fileNames.forEach((fileName) => {
        const filePath = path.join(directoryPath, fileName);

        if (fs.statSync(filePath).isFile()) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const jsonContent = JSON.parse(fileContent);
            if (jsonContent.answer === "yes") {
                const res = fileName.split('.')[0].replaceAll('_', ' ').split(' ');
                const finel = res[1] + " " + res[0];
                check.push(finel);
            } 
        }
    });
    const sortedCheck = check.sort();
    const output = sortedCheck.map((elem, index) => `${index + 1}. ${elem}`).join('\n');
    return output;
}

const result = main();
fs.writeFile('vip.txt', result, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Result written to vip.txt');
    }
});