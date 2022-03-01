const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = 2 ** n;
  return answer;
}

console.log(solution());
