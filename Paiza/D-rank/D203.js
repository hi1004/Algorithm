const [s, c, n] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  console.log(s[n - 1] === c ? 'Yes' : 'No');
})();
