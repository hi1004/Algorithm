const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input.shift());
const [a, b] = input[0].split(' ').map(Number);

const ck = Math.floor(a / 2) + b;
console.log(ck >= n ? n : ck);
