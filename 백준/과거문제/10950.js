const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

for (let i = 1; i <= input[0]; i++) {
  const answer = input[i]
    .split(' ')
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  console.log(answer);
}
