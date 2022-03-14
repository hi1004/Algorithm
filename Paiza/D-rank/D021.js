const [S, T] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  const answer = S === T ? 'Yes' : 'No';
  console.log(answer);
})();
