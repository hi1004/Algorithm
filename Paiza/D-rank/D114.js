const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = b + Math.floor((b * a) / 100);
  console.log(answer);
})();
