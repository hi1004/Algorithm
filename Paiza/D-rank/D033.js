const [s, t] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function solution() {
  const answer = `${s[0]}.${t[0]}`;
  return answer;
}

console.log(solution());
