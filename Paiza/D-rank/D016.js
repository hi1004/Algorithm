const [S, N] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution() {
  // Array.join()
  const answer = [];
  for (let i = 0; i < N; i++) {
    answer.push(S[i]);
  }
  return answer.join('');
}
console.log(solution());
