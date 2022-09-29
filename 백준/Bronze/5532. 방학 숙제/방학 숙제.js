const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const numbers = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const day = numbers.shift();
let [A, B, C, D] = numbers;

let count = 0;
let count2 = 0;
if (A % C !== 0 && C !== 1) {
  count++;
}

if (B % D !== 0 && D !== 1) {
  count2++;
}

const d = Math.floor(A / C) + count;
const m = Math.floor(B / D) + count2;
console.log(day - Math.max(d, m));
