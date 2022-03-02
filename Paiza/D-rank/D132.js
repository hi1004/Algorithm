const [N, S] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution() {
  // String.repeat();
  const answer = S.repeat(N);
  return answer;
}

console.log(solution());
