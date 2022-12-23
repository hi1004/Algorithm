const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const N = Number(input.shift());
const times = input.slice().map(n =>
  n
    .split(' ')
    .map(Number)
    .reduce((a, b) => a + b / 60)
);
console.log(times.reduce((a, b) => a + b) <= 74 ? 'Yes' : 'No');
