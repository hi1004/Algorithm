const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [k, d, a] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('/')
  .map(Number);

console.log(k + a < d || d === 0 ? 'hasu' : 'gosu');
