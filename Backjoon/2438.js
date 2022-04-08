const [n] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n')
  .map(Number);

let answer = [];
for (let i = 1; i <= n; i++) {
  answer.push('*'.repeat(i));
}
console.log(answer.join('\n'));
