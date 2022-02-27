const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n) {
  const answer = Math.abs(n);
  return answer;
}

console.log(solution(n));
