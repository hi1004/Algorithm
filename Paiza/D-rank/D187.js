const [a, b] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(a, b) {
  const answer = `${a}/${b}`;
  return answer;
}

console.log(solution(a, b));
