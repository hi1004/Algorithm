const [F_1, F_2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = Math.abs(F_1 - F_2);
  console.log(answer);
})();
