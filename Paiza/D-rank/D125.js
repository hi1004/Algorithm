const [n, ...a] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

(function solution() {
  const sum = a.reduce((acc, cur) => acc + cur);
  const answer = Math.floor(sum / n);
  console.log(answer);
})();
