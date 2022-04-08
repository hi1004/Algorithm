const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

let answer = [];
for (let i = 1; i <= input[0]; i++) {
  answer += input[i]
    .split(' ')
    .map(Number)
    .reduce((acc, cur) => acc + cur + '\n');
}
console.log(answer);
