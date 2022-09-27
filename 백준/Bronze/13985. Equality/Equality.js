const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[2]);
console.log(a + b === Number(input[input.length - 1]) ? 'YES' : 'NO');
