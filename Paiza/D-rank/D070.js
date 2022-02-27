const [m, n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(m, n) {
  const answer = m - n;
  return answer;
}

console.log(solution(m, n));
