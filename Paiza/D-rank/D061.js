const [c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function solution() {
  const answer = c >= 1 ? c * 3 : 1;
  return answer;
}

console.log(solution());
