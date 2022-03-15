const [N, ...A] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

(function solution() {
  const sum = A.reduce((acc, cur) => acc + cur);
  const answer = N <= sum ? N : sum;
  console.log(answer);
})();
