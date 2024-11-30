import { Buffer } from 'node:buffer';
import { writeFile, readFile } from 'node:fs/promises';

const args = process.argv
let filename = args[2];
const flag = args[3];
const content = await readFile(filename, 'utf-8');

let data2 = await Buffer.from(content, 'base64').toString();
let data = await Buffer.from(content).toString('base64');

if (flag === "encode") {
    filename = "cypher.txt";
} else {
    filename = "clear.txt";
}

if (args.length == 5) {
    filename = args[4];
}

if (flag === 'encode') {
    writeFile(filename, data);
} else if (flag === 'decode') {
    writeFile(filename, data2);
}