const [C, T, A] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = C + T + A;
  return answer;
}

console.log(solution());
