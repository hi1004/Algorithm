const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
  const answer = a === b && a === c ? 'YES' : 'NO';
  return answer;
}

console.log(solution());
