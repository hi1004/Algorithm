const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, l, r] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const arr = [];
const range = [];
const result = 0;
for (let i = l; i <= r; i++) {
  const num = Math.abs(x - i);
  range.push(i);
  arr.push(num);
}
console.log(range[arr.indexOf(Math.min(...arr))]);
