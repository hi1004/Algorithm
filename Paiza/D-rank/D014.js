const [s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution(s) {
  const answer = s.toUpperCase();
  return answer;
}

console.log(solution(s));
