const [t] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = 24 % t > 0 ? Math.floor(24 / t + 1) : Math.floor(24 / t);
  console.log(answer);
})();
