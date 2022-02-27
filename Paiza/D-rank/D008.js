const [N] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(N) {
  const answer = N % 2 ? 'odd' : 'even';
  return answer;
}

console.log(solution(N));
