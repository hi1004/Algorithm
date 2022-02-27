const [S, c] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(S, c) {
  const answer = `${c}${S}${c}`;
  return answer;
}
console.log(solution(S, c));
