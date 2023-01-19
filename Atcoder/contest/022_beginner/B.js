const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const n = Number(input.shift());
const nums = input;

console.log(n - new Set(nums).size);
