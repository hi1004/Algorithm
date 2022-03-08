const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = N + M < 16 ? 'HIT' : 'STAND';
  console.log(answer);
})();
