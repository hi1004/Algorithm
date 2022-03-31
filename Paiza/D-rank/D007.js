const [n] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const answer = '*'.repeat(n);
  console.log(answer);
})();
