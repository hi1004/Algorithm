const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(N, M) {
  const answer = (N / 10) * M;
  return answer;
}

console.log(solution(N, M));
