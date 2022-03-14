const weeks = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

(function solution() {
  const answer = weeks.filter(day => day === 'no');
  console.log(answer.length);
})();
