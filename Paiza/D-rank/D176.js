const [s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution(s) {
  const answer = s.length <= 20 ? 'OK' : 'NG';
  return answer;
}

console.log(solution(s));
