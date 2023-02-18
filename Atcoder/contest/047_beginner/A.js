const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split(/\s+/).map(Number);
input.sort((a, b) => a - b);
const maxNum = input.pop();
console.log(maxNum === input.reduce((a, b) => a + b, 0) ? 'Yes' : 'No');
