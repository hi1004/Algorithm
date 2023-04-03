const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let s = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(/\s+/)
  .map(v => (isNaN(v) ? v : +v));
console.log(s[0][0] + s[1][1] + s[2][2]);
