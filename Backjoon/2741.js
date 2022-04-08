const [n] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split(' ')
  .map(Number);

let answer = '';
for (let i = 1; i <= n; i++) {
  answer += `${i}\n`;
}
console.log(answer);
