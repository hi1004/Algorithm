const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, W, H, L] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sum = Math.floor(W / L) * Math.floor(H / L);
console.log(sum <= N ? sum : N);
