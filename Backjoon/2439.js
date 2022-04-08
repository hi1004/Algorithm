const [n] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

let answer = [];

for (let i = n; i > 0; i--) {
  answer.push(' '.repeat(i - 1) + '*'.repeat(n - (i - 1)));
}
console.log(answer.join('\n'));
