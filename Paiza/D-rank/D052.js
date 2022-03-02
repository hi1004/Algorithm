const [N] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

function solution() {
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution());
