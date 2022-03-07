const [L, M, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  // String.repeat(count);
  console.log('A'.repeat(L) + 'B'.repeat(M) + 'A'.repeat(N));
})();
