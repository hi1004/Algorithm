const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));

console.log(n * 100);
