const [n] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

function solution(n) {
  const answer = n >= 1000 ? n + 3 : n;
  return answer;
}

console.log(solution(n));
