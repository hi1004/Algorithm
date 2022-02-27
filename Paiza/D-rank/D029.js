const [n] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

function solution(n) {
  const answer = 7 - n;
  return answer;
}

console.log(solution(n));
