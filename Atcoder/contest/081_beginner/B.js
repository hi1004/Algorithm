const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...nums] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let arr = nums.filter(n => n % 2 === 0);
let count = 0;
while (arr.length === n) {
  count++;
  arr = arr.map(n => n / 2).filter(n => n % 2 === 0);
}
console.log(count);
