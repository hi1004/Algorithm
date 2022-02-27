const [N] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(N) {
  const answer = Math.floor(N / 2);
  return answer;
}

console.log(solution(N));
