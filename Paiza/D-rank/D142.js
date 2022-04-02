const [N, X, Y] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const answer = Math.ceil(N / X) * Y;
  console.log(answer);
})();
