const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');
const n = input.shift();
const arrs = input.slice().map(n => n.split(' ').map(Number));

let sum = 0;
for (let i = 0; i < arrs.length; i++) {
  const [a, b] = arrs[i];
  sum += b % a;
}
console.log(sum);
