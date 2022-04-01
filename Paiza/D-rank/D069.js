const scores = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

(function solution() {
  const sum = scores.reduce((acc, cur) => {
    return acc + cur;
  });
  const answer = sum / 7;
  console.log(answer.toFixed(1));
})();
