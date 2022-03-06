const [t] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
  const answer = t >= 30 && t < 35 ? 'M' : t;
  return answer;
}

console.log(solution());
