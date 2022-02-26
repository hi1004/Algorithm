const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ').map(Number);

function solution(n) {
  const answer = n * 10;
  return answer;
}

console.log(solution(n));
