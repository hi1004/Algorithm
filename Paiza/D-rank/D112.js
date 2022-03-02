const [n, h] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(n, h) {
  const answer = n * h;
  return answer;
}

console.log(solution(n, h));
