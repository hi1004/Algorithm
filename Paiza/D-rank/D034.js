const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = n % 3 ? n % 3 : n;
  console.log(answer);
})();
