const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [n, k] = input.shift().split(' ').map(Number);
const m = input.slice().map(n => Number(n));

const sum = m.reduce((a, b) => a + b, 0);

console.log(sum < k ? 'Yes' : 'No');
