const [s_1, s_2] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function solution() {
  const answer = s_1.length === s_2.length ? 'Yes' : 'No';
  return answer;
}

console.log(solution());
