const [a, b] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

function solution() {
  const answer = a + b === 21 ? 'Win' : a + b;
  return answer;
}

console.log(solution());
