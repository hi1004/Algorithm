const [s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution(s) {
  const answer = `${s}!`;
  return answer;
}

console.log(solution(s));
