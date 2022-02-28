const [a, b] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(a, b) {
  const answer = a * b >= 10000 ? 'NG' : a * b;
  return answer;
}

console.log(solution(a, b));
