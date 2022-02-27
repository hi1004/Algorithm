const [s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution(s) {
  // String.toUpperCase()
  const answer = s.toUpperCase();
  return answer;
}

console.log(solution(s));
