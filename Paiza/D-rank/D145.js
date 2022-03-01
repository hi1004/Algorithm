const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = Math.floor(N / M);
  return answer;
}

console.log(solution());
