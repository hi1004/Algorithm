const [s, n] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer = s.replace(s[n - 1], '');
  console.log(answer);
})();
