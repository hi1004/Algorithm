const [n, s] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution() {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(s[i]);
  }
  return answer.join('');
}

console.log(solution());
