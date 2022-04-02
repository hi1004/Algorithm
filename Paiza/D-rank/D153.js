const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

(function solution() {
  const answer = input.sort((a, b) => a - b);
  console.log(answer[0]);
})();
