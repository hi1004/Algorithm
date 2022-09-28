const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [S, M, L] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const ans = 1 * S + 2 * M + 3 * L >= 10 ? 'happy' : 'sad';

console.log(ans);
