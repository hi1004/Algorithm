const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = n < 1000 ? 0 : n * 0.1;
  console.log(Math.floor(answer));
})();
