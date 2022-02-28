const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n) {
  // Object.toString();
  const answer = n.toString().length;
  return answer;
}

console.log(solution(n));
