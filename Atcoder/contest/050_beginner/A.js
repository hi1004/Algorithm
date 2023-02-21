const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/);
const a = Number(input[0]);
const sign = input[1];
const b = Number(input[2]);

console.log(sign === '+' ? a + b : a - b);
