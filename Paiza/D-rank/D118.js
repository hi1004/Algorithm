const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  const sYear = 1926;
  const hYear = 1989;
  const answer = input[0] === 'S' ? sYear + Number(N) - 1 : hYear + Number(N) - 1;
  console.log(answer);
})();
