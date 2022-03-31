const [s] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

(function solution() {
  const exp = /a|e|i|o|u/gi;
  console.log(s.replace(exp, ''));
})();
