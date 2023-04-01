const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [x, ...a] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
a.sort((a, b) => b - a);
console.log(
  a
    .map((n, i) => {
      if (i % 2 !== 0) return -n;
      return n;
    })
    .reduce((a, b) => a + b, 0)
);
