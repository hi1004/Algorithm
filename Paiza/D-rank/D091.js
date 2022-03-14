const days = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

(function solution() {
  const answer = days.filter(day => day <= 2);
  console.log(answer.length);
})();
