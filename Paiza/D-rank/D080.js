const [n, m] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n, m) {
  const answer = n * 6000 + m * 4000;
  return answer;
}

console.log(solution(n, m));
