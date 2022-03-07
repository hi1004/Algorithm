const [s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = parseInt(s, 12);
  console.log(answer);
})();
