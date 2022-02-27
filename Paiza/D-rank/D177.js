const [a, n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(a, n) {
  const answer = a * n;
  return answer;
}

console.log(solution(a, n));
