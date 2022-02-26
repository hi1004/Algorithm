const [n, m] = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(Number);

function solution(n, m) {
  const answer = m % n;
  return answer;
}

console.log(solution(n, m));
