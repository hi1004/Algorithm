const [Y, M, D] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution(Y, M, D) {
  const answer = `${M}/${D}/${Y}`;
  return answer;
}

console.log(solution(Y, M, D));
