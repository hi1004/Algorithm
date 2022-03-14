const [p, x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = p + p * (y / 100) - (p + p * (x / 100));
  console.log(answer);
})();
