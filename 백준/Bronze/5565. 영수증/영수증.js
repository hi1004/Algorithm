const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const arr = input.slice(0).map(n => Number(n));

const sum = arr.reduce((a, b) => a + b, 0);
console.log(n - sum);
