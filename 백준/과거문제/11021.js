const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

const n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  const sum = input[i]
    .split(' ')
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  arr.push(`Case #${i}: ${sum}`);
}
console.log(arr.join('\n'));
