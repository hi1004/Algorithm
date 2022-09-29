const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const arr = input.join('').split(' ').map(Number);

console.log(arr.filter(i => i === n).length);
