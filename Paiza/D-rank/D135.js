const [D] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
// D = 180 × (N - 2), N = D/180 + 2
function solution(D) {
  const answer = D / 180 + 2;
  return answer;
}

console.log(solution(D));
