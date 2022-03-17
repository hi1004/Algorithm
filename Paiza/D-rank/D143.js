const [m, v, f] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = Math.floor((m * v ** 2) / (2 * f));
  console.log(answer);
})();
