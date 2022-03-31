const [n] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const answer = parseInt(n, 2);
  console.log(answer);
})();
