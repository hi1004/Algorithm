const [n, d, e] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = n <= d * e ? 'OK' : 'NG';
  return answer;
}

console.log(solution());
