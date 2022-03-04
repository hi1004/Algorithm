const [S, N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
  const answer = S === 'chocolate' ? N * 2 : N * 5;
  return answer;
}

console.log(solution());
