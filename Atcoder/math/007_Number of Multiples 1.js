const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, X, Y] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let count = 0;
for (let i = 1; i <= N; i++) {
  if (i % X === 0 || i % Y === 0) count++;
}
console.log(count);
