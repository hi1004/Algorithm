const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [A, B, C, D] = line;

const num1 = `${A}${B}`;
const num2 = `${C}${D}`;
console.log(Number(num1) + Number(num2));
