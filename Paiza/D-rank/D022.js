const [a] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = 6 * Math.pow(a, 2);
  return answer;
}

console.log(solution());
