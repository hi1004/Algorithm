const [n, S] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  const answer = S.split('').reverse().join('');
  console.log(answer);
})();
