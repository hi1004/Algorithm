const [n] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
