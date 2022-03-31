const [s, n] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer = s.slice(1, n);
  console.log(answer);
})();
