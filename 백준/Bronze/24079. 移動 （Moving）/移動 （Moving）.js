const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [x, y, z] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const ans = x + y <= z + 0.5 ? 1 : 0;
console.log(ans);
