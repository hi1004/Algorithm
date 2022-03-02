const [N] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const obj = {
  5: 'A',
  3: 'C',
  2: 'D',
  4: 'B',
  1: 'E',
};

function solution() {
  const answer = obj[N];
  return answer;
}

console.log(solution());
