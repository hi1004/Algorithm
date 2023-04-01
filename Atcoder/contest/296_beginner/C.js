const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, x, ...s] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));
s = [...new Set(s.sort((a, b) => b - a))];
const f = s.map(n => n - x);
const collection = {};
let flag = 'No';
s = s.concat(f);
for (let val of s) {
  collection[val] = (collection[val] || 0) + 1;
}
for (let key in collection) {
  if (collection[key] >= 2) {
    flag = 'Yes';
  }
}
console.log(flag);
