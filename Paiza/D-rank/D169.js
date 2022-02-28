const [a, b] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(a, b) {
  const answer = console.log(a - b);
  return answer;
}

solution(a, b);
