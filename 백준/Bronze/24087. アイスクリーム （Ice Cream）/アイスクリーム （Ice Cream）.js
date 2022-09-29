const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [s, a, b] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const ans = a < s ? 250 + 100 * Math.ceil((s - a) / b) : 250;
console.log(ans);
