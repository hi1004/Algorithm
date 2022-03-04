const [s, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function solution() {
  const answer = s[n - 1];
  return answer;
}

console.log(solution());
