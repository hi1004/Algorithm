const [S, ...A] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

(function solution() {
  const minNumber = Math.min(...A);
  const answer = S * minNumber;
  console.log(answer);
})();
