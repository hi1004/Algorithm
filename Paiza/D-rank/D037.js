const [M, N] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

(function solution() {
  const answer = N % M > 0 ? Math.floor(N / M + 1) : Math.floor(N / M);
  console.log(answer);
})();
