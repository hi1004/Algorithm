let s = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

(function solution() {
  const answer = s.join(' ').replaceAll('False', 'True');
  console.log(answer);
})();
