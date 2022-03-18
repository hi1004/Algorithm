const [...t] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = t.filter(v => v <= 30);
  console.log(answer.length);
})();
