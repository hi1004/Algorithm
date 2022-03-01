// const [n] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

const n = 10;
function solution1() {
  let answer = 0;
  let sum = 1;
  while (sum <= n) {
    answer += sum;
    sum++;
  }
  return answer;
}
function solution2() {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution1());
console.log(solution2());
