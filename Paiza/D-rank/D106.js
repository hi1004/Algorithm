const [N, M] = require('fs').readFileSync('./paiza/input.txt', 'utf8').split('\n').map(Number);

function solution(N, M) {
  const answer = N % M;
  return answer;
}

console.log(solution(N, M));
