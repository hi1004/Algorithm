const [t, u] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = t - u;
  return answer;
}

console.log(solution());
