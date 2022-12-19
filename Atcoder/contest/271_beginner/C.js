const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let n = input[0];
const a = new Set(input[1].split(' ').map(Number));
console.log(a);
let i;
for (i = 1; n >= 0; i++) {
  n -= a.has(i) ? 1 : 2;
}

console.log(i - 2);
