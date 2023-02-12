const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, ...A] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const collection = {};
for (let [index, val] of A.entries()) {
  collection[val] = index + 1;
}

A.sort((a, b) => b - a);
A.forEach(n => console.log(collection[n]));
