const [n, ...str] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer = `Hello ${str.join(',')}.`;
  console.log(answer);
})();
