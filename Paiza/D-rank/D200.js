const [n] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

function solution(n) {
  const answer = n * 25 * 24;
  return answer;
}

console.log(solution(n));
