const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution(n) {
  // Number.toFixed()
  const answer = (n * 1.5).toFixed(1);
  return answer;
}

console.log(solution(n));
