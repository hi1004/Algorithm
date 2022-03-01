const [r_1, r_2] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function solution() {
  const answer = r_1 ** 3 - r_2 ** 3;
  return answer;
}
console.log(solution());
