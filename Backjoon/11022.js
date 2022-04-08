const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

const n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  const numbers = input[i].split(' ').map(Number);
  const sum = numbers.reduce((acc, cur) => acc + cur);
  arr.push(`Case #${i}: ${numbers[0]} + ${numbers[1]} = ${sum}`);
}
console.log(arr.join('\n'));
