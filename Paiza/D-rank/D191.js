const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n) {
  const answer = n >= 37.0 ? 'NG' : 'OK';
  return answer;
}

console.log(solution(n));
