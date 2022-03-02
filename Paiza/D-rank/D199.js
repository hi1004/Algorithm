const [n, m] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(n, m) {
  const answer = n * m;
  return answer;
}
console.log(solution(n, m));
