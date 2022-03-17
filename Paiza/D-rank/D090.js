const [...a] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const sum = a.reduce((acc, cur) => acc + cur);
  const answer = sum > 9 ? sum % 10 : sum;
  console.log(answer);
})();
