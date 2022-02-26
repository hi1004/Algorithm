const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(Number);

function solution(N, M) {
  const answer = N * M;
  return answer;
}

console.log(solution(N, M));
