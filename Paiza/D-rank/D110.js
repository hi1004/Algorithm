const [a, b, c] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(a, b, c) {
  const answer = a * b * c;
  return answer;
}

console.log(solution(a, b, c));
