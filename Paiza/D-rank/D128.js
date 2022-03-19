const [n, ...s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);

(function solution() {
  const answer = s.map(v => v[0]);
  console.log(answer.join(''));
})();
