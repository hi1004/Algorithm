const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, x], ...m] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(i =>
    i
      .trim()
      .split(/\s+/)
      .map(v => (isNaN(v) ? v : +v))
  );

let res = x - m.map(Number).reduce((a, b) => a + b);
m.sort((a, b) => a - b);
const answer = Math.max(...m.map(Number).map(n => Math.floor(res / n)));
console.log(n + answer);
