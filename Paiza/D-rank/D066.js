const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = m <= n ? n - m : 'No';
  console.log(answer);
})();
