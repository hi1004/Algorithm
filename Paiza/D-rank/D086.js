const [L] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = L * 5;
  console.log(answer);
})();
