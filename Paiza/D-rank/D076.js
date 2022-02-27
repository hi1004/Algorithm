const [W, S] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution(W, S) {
  const answer = S.includes(W) ? 'NG' : S;
  return answer;
}

console.log(solution(W, S));
