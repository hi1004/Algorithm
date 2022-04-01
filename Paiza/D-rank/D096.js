const [s] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const pattern = /I/gi;
  const test = pattern.test(s);
  const answer = test ? 'caution' : s;
  console.log(answer);
})();
