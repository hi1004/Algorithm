const [X] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

function solution(X) {
  const answer = X < 10000 ? X + 10000 : X;
  return answer;
}
console.log(solution(X));
