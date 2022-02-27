const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n) {
  const answer = 222 - n;
  return answer;
}

console.log(solution(n));
