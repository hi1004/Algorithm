const [a, b] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer =
    a[a.length - 1] === b[0] && b[b.length - 1] !== 'n' ? 'OK' : 'NG';
  console.log(answer);
})();
