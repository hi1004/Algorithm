const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const answer = a === b ? 'eq' : Math.max(a, b);
  console.log(answer);
})();
