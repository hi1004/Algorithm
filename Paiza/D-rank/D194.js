const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n) {
  const answer = n * 540;
  return answer;
}

console.log(solution(n));
