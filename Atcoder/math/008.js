let [N, S] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);
let count = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (i + j <= S) count++;
  }
}
console.log(count);
