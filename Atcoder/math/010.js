let [N] = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

let result = 1;
for (let i = 1; i <= N; i++) {
  result *= i;
}
console.log(result);
