const [a, b] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(a, b) {
  const answer = 180 - (a + b);
  return answer;
}

console.log(solution(a, b));
