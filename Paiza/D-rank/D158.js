const [N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = N >= 40 && N <= 60 ? 'OK' : 'NG';
  return console.log(answer);
})();
