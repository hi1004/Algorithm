const [N] = require('fs').readFileSync('./paiza/input.txt', 'utf8').split('\n').map(Number);

function solution(N) {
  const answer = N * 150;
  return answer;
}

console.log(solution(N));
