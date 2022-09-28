const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [d, h, m] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const pivot = 11 + 11 * 60 + 11 * 60 * 24;
const ans = m + h * 60 + d * 60 * 24 - pivot;
if (ans < 0) console.log(-1);
else console.log(ans);
