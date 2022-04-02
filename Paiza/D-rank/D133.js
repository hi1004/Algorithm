const [X, A, B] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer = Math.floor(X / A) * B - Math.floor(X / A) * A;
  console.log(answer);
})();
