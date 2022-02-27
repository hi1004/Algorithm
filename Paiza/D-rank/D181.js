const [N_1, N_2, N_3] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(N_1, N_2, N_3) {
  const answer = `${N_1}-${N_2}-${N_3}`;
  return answer;
}

console.log(solution(N_1, N_2, N_3));
