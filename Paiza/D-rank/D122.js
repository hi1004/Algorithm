const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n) {
  const answer = n <= 0 ? Math.abs(n) : -n;
  return answer;
}
console.log(solution(n));
