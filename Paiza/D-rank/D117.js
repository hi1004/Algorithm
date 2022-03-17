const [N, ...a] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);

(function solution() {
  const answer = a.reduce((acc, cur) => acc + cur);
  console.log(answer);
})();
