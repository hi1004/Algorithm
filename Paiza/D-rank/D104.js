const [N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = N < 10 ? 1000 : N * 150;
  console.log(answer);
})();
