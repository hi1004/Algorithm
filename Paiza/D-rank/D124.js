const [T] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  // Math.ceil();
  const answer = T <= 24 ? 1 : Math.ceil(T / 24);
  console.log(answer);
})();
