const [s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = s.length >= 11 ? 'OK' : 11 - s.length;
  console.log(answer);
})();
