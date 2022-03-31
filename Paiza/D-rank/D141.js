const [n, ...s] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer = s.join(' ');
  console.log(answer);
})();
