const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution1() {
  let answer = [];
  for (let i = 1; i <= 9; i++) {
    answer.push(n * i);
  }
  console.log(answer.join(' '));
})();
