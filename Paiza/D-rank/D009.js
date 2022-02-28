const [a, b] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(a, b) {
  const answer = b - a;
  return answer;
}

console.log(solution(a, b));
