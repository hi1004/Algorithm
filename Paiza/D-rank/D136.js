const [S] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution(S) {
  // Array.slice()
  const answer = S.slice(0, 3);
  return answer;
}

console.log(solution(S));
