let [N, X, Y] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);
let count = 0;

for (let i = 1; i <= N; i++) {
  if (i % X === 0 || i % Y === 0) count++;
}
console.log(count);
