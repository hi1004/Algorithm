const [y, m, d] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = `${y}/${m}/${d}`;
  return answer;
}

console.log(solution());
